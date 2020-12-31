import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Grid,
  TextField,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { Post } from "store";
import { blogApi } from "apiRequests/api";

export const getServerSideProps: GetServerSideProps = async ({
  params: { id },
}) => {
  const response = await blogApi.getSinglePost(id);
  const post = response.data;

  return {
    props: { post },
  };
};
interface Props {
  post: Post;
}

const UpdatePost: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  const { id, title, body } = post;
  console.log(post);

  const [newTitle, setTitle] = useState(title);
  const [newBody, setBody] = useState(body);

  const onChangeTitleHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value);
  };
  const onChangeBodyHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setBody(target.value);
  };

  const updatePost = (e: React.FormEvent) => {
    e.preventDefault();
    blogApi
      .updatePost(id, { title: newTitle, body: newBody })
      .then(() => {
        router.push("/posts/[postId]", `/posts/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={updatePost}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Post title"
              value={newTitle}
              type="text"
              onChange={onChangeTitleHandler}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              value={newBody}
              onChange={onChangeBodyHandler}
              fullWidth
              variant="outlined"
              multiline
              rows={10}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button variant="contained" color="primary" type="submit">
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default UpdatePost;
