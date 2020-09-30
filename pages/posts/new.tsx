
import PostForm from './../../components/PostForm/PostForm';
import Layout from '../../layout/Layout';


export default function NewPost():JSX.Element{
    return(
        <Layout title="Create new post">
        <h1>Create new post</h1>
        <PostForm/>
        </Layout>
    )
}