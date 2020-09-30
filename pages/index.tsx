import Head from 'next/head'
import Layout from '../layout/Layout'
import PostCard from '../components/PostCard/PostCard'
import { IPost } from './../interfaces/interfaces';



interface HomePageProps{
  data:IPost[]
}

export async function getServerSideProps() {

  const response= await fetch('https://simple-blog-api.crew.red/posts')
  const data= await response.json()
  data.reverse()
  
  return {
    props: {data}
  }
}
export default function Home({data}:HomePageProps):JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Home Page">
      {data.map(post=>{
        return <PostCard key={post.id} id={post.id}  title={post.title}/>
      })}
      </Layout>
    </>
      
  )
}
