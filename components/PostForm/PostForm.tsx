import React, { useState } from "react";
import { blogApi } from "apiRequests/api";
import { useRouter } from "next/router";
import { Button, TextField, Grid } from "@material-ui/core";

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

  const savePost = (e: React.FormEvent) => {
    e.preventDefault();
    blogApi.createPost({ title: postTitle, body: postBody }).then(() => {
      router.push("/");
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <form onSubmit={savePost}>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <TextField
                value={postTitle}
                onChange={onChangePostTitleHandler}
                label="Enter post title"
                fullWidth
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                value={postBody}
                onChange={onChangePostBodyHandler}
                label="Enter your post"
                variant="outlined"
                multiline
                fullWidth
                rows={10}
              />
            </Grid>
            <Grid item sm={12}>
              <Button variant="contained" color="primary" type="submit">
                Save post
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default PostForm;
