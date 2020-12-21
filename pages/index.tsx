import React from "react";
import { GetServerSideProps } from "next";
import { blogApi } from "apiRequests/api";
import Head from "next/head";
import PostCard from "components/PostCard";
import { Grid } from "@material-ui/core";
import { Post } from "store";

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
        <title>My blog</title>
      </Head>
      <Grid container spacing={1} direction="column-reverse">
        {posts.map(({ id, title }) => (
          <Grid key={id} item xs={12}>
            <PostCard id={id} title={title} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Home;
