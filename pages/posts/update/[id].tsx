import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { Post } from "store";
import { blogApi } from "apiRequests/api";
import { Dictionary, Routes } from "const";

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

  const updatePost = () => {
    blogApi
      .updatePost(id, { title: newTitle, body: newBody })
      .then(() => {
        router.push(`${Routes.POSTS}${Routes.POST_ID}`, `${Routes.POSTS}/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  return (
    <>
      <Head>
        <title>{Dictionary.UPDATE_POST}</title>
      </Head>
      <form onSubmit={handleSubmit(updatePost)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Post title"
              value={newTitle}
              type="text"
              name="postTitle"
              error={!!errors.postTitle}
              helperText={errors?.postTitle?.message}
              inputRef={register({
                required: Dictionary.REQUIRED_FIELD,
                minLength: {
                  value: 4,
                  message: Dictionary.TITLE_MIN_LENGTH,
                },
              })}
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
              name="postBody"
              error={!!errors.postBody}
              helperText={errors?.postBody?.message}
              inputRef={register({
                required: Dictionary.REQUIRED_FIELD,
                minLength: {
                  value: 30,
                  message: Dictionary.POST_MIN_LENGTH_MESSAGE,
                },
              })}
              multiline
              rows={10}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button variant="contained" color="primary" type="submit">
              {Dictionary.UPDATE}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default UpdatePost;
