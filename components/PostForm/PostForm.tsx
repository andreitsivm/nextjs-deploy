import {Form,Button} from 'react-bootstrap'

import axios from 'axios'
import {useRouter} from 'next/router'
import {useSelector,useDispatch}  from 'react-redux';
import { setBody,setTitle } from './../../redux/actions';



export default function PostForm():JSX.Element{
const router=useRouter()
    const dispatch=useDispatch()
    const title=useSelector(state=>state.app.inputedTitle)
    const body=useSelector(state=>state.app.inputedBody)
    

   const  onChangeTitleHandler=(e)=>{
        dispatch(setTitle(e.target.value))
   }
   const  onChangeBodyHandler=(e)=>{
    dispatch(setBody(e.target.value))
}
 
   

    const savePost=(e)=>{
        e.preventDefault()
        axios({
            method:"post",
            url:'https://simple-blog-api.crew.red/posts',
            data:{
                title,
                body
            },
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>{
            router.push('/')
        })
    }
    return(
        <Form>
           <Form.Group>
               <Form.Label>Post title</Form.Label>
               <Form.Control value={title} type="text" onChange={onChangeTitleHandler} />
            </Form.Group> 
            <Form.Group>
                <Form.Label>Post body</Form.Label>
                <Form.Control as="textarea" value={body} onChange={onChangeBodyHandler} rows={3}></Form.Control>
            </Form.Group>  
            <Button variant="success" type="submit" onClick={savePost}>Save</Button>  
        </Form>
    )
}