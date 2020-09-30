

import { Form, Button } from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import { saveComment} from './../../redux/actions';
import {useRouter} from 'next/router'
import axios from 'axios'
import CommentItem from './CommentItem/ComentItem';
import {IComment} from './../../interfaces/interfaces'

interface ICommentsProps{
    comments:IComment[],
    postId:number
}



export default function Comments ({comments,postId}:ICommentsProps):JSX.Element{
    const router=useRouter()
    const inputedComment=useSelector(state=>state.app.inputedComment)
    const dispatch=useDispatch()

    const changeHandler=(e)=>{
        dispatch(saveComment(e.target.value))
    }
    const addComment=(e)=>{
        e.preventDefault()
        if(inputedComment===''){
            return
        }
        axios({
            method:'post',
            url:`https://simple-blog-api.crew.red/comments`,
            data:{
                body:inputedComment,
                postId
            },
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(()=>{
            dispatch(saveComment(''))
            router.push(`/posts/[postId]`,`/posts/${postId}`)

        })
        
    }
    return(
        <div>
            {comments.length>0?
            <div>
                {comments.map(item=><CommentItem key={item.id} body={item.body}/>)}
            </div>
            :<p>No comments yet</p>}
        
            <Form>
                <Form.Group>
                    <Form.Label>Enter new comment</Form.Label>
                    <Form.Control value={inputedComment} type="text" onChange={changeHandler}/>
                    </Form.Group>
                <Button variant="primary" onClick={addComment}>Add comment</Button>
            </Form>
        </div>
    )
}