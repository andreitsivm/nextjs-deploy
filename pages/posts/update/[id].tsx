import {Form,Button} from 'react-bootstrap'
import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import Layout from '../../../layout/Layout';
import { IPost } from './../../../interfaces/interfaces';

interface UpdatePostProps{
    post:IPost
}

export  async function getServerSideProps({params}){
    const response=await axios.get(`https://simple-blog-api.crew.red/posts/${params.id}`)
    const post:IPost=response.data

    return{
        props:{post}
    }
}

export default function UpdatePost({post}:UpdatePostProps):JSX.Element{

    const router=useRouter()


    const [title,setTitle]=useState(post.title)
    const [body,setBody]=useState(post.body)

   const  onChangeTitleHandler=(e)=>{
        setTitle(e.target.value)
   }
   const  onChangeBodyHandler=(e)=>{
    setBody(e.target.value)
}
 
    const updatePost=(e)=>{
        e.preventDefault()
        axios({
            method:'put',
            url:`https://simple-blog-api.crew.red/posts/${post.id}`,
            data:{
                title,
                body
            },
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>{
            router.push('/posts/[postId]',`/posts/${post.id}`)
        }).catch(error=>{
            console.log(error)
        })
        
        
       

    }
    return(
        <Layout title="Update post">
            <h1>Update your post</h1>
        <Form>
           <Form.Group>
               <Form.Label>Post title</Form.Label>
               <Form.Control value={title} type="text" onChange={onChangeTitleHandler} />
            </Form.Group> 
            <Form.Group>
                <Form.Label>Post body</Form.Label>
                <Form.Control as="textarea" value={body} onChange={onChangeBodyHandler} rows={3}></Form.Control>
            </Form.Group>  
            <Button variant="primary" type="submit" onClick={updatePost}>Update</Button>  
        </Form>
        </Layout>
    )
}