import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, TextField, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { blogApi } from "apiRequests/api";
import { Dictionary, Routes } from "const";

const PostForm: React.FC = () => {
  const router = useRouter();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const onChangePostTitleHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(target.value);
  };
  const onChangePostBodyHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPostBody(target.value);
  };

  const savePost = () => {
    blogApi.createPost({ title: postTitle, body: postBody }).then(() => {
      router.push(Routes.MAIN);
    });
  };
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <form onSubmit={handleSubmit(savePost)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="title"
                error={!!errors.title}
                helperText={errors?.title?.message}
                value={postTitle}
                onChange={onChangePostTitleHandler}
                label={Dictionary.ENTER_POST_TITLE}
                inputRef={register({
                  required: Dictionary.REQUIRED_FIELD,
                })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                value={postBody}
                name="postBody"
                inputRef={register({
                  required: Dictionary.REQUIRED_FIELD,
                })}
                onChange={onChangePostBodyHandler}
                label={Dictionary.ENTER_POST_BODY}
                error={!!errors.postBody}
                helperText={errors?.postBody?.message}
                variant="outlined"
                multiline
                fullWidth
                rows={10}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" color="primary" type="submit">
                {Dictionary.SAVE_POST}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default PostForm;
