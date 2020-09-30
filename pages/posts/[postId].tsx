
import Link  from 'next/link';
import {Row, Button} from 'react-bootstrap'
import Layout from '../../layout/Layout';
import axios from 'axios'
import {useRouter} from 'next/router'
import Comments from '../../components/Coments/Comments'
import { IPost, IComment } from './../../interfaces/interfaces';


interface PostsProps{
    post:IPost,
    comments:IComment[]
}


export  async function getServerSideProps({params}){
    

    const postData= await axios.get(`https://simple-blog-api.crew.red/posts/${params.postId}`)
    const commentsData= await axios.get(`https://simple-blog-api.crew.red/posts/${params.postId}?_embed=comments`)
    const post:IPost=postData.data
    const comments:IComment[]=commentsData.data.comments

    return{
        props:{post,
            comments}
    }
}

export default function Post({post,comments}:PostsProps):JSX.Element{


    const router=useRouter()
    const deletePost=(e)=>{
        e.preventDefault()
        axios({
            method:"delete",
            url:`https://simple-blog-api.crew.red/posts/${post.id}`
        })
        .then(()=>{
            router.replace('/')
        })
        

    }
    const goToUpdate=()=>{
        router.push('/posts/update/[id]',`/posts/update/${post.id}`)


    }

    return(
        <Layout title="Post">
        
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Row>
        <Button variant="primary" onClick={goToUpdate}>Update post</Button>
        <Button variant="danger" onClick={deletePost}>Delete post</Button></Row>
        <Row>
            <Comments comments={comments} postId={post.id}/>
        </Row>
        <Row>
        <Link href="/"><a>Follow Back</a></Link></Row>
        </Layout>
    )
}