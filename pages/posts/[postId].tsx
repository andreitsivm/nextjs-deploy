import React from "react";
import Link from "next/link";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { Grid, Button, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import PostComments from "components/PostComments/PostComments";
import { blogApi } from "apiRequests/api";
import { Post } from "store";
import { Dictionary, Routes } from "const";

export const getServerSideProps: GetServerSideProps = async ({
  params: { postId },
}) => {
  const response = await blogApi.getSinglePost(postId);
  const post = response.data;

  return {
    props: { post },
  };
};

interface Props {
  post: Post;
}

const SinglePost: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  const { id, title, body, comments } = post;

  const deletePost = (e: React.SyntheticEvent) => {
    e.preventDefault();
    blogApi.deletePost(id).then(() => {
      router.replace(Routes.MAIN);
    });
  };
  const goToUpdate = () => {
    router.push(`${Routes.POST_UPDATE}${Routes.ID}`, `${Routes.POST_UPDATE}/${id}`);
  };

  return (<>
  <Head>
    <title>{Dictionary.POST}</title>
  </Head>
    <Grid container spacing={3} direction="column">
      <Grid item xs={12} sm={12}>
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align="justify" variant="body1">
          {body}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={12}
        spacing={3}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Button variant="contained" color="primary" onClick={goToUpdate}>
            {Dictionary.UPDATE_POST}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={deletePost}>
          {Dictionary.DELETE_POST}
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        <PostComments comments={comments} postId={id} />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Link href={Routes.MAIN}>
          <Button variant="contained" color="secondary">
            {Dictionary.FOLLOW_BACK}
          </Button>
        </Link>
      </Grid>
    </Grid>
    </>
  );
};
export default SinglePost;
