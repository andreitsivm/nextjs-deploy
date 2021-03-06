import React from "react";
import { GetServerSideProps } from "next";
import { blogApi } from "apiRequests/api";
import Head from "next/head";
import Blog from "components/Blog";
import { Post } from "store";
import { PageTitles } from "const";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await blogApi.getPosts();
  const posts = response.data;

  return {
    props: { posts },
  };
};

interface Props {
  posts: Post[];
}
const Home: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{PageTitles.BLOG}</title>
      </Head>
      <Blog posts={posts} />
    </>
  );
};
export default Home;
