import React, { useState } from "react";
import { blogApi } from "apiRequests/api";
import { useRouter } from "next/router";
import { Button, FormControl, Input, InputLabel, Box } from "@material-ui/core";

export const PostForm: React.FC = () => {
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
    <form onSubmit={savePost}>
      <Box>
        <FormControl>
          <InputLabel htmlFor="title">Post title</InputLabel>
          <Input
            id="title"
            type="text"
            value={postTitle}
            onChange={onChangePostTitleHandler}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <InputLabel htmlFor="body">Post body</InputLabel>
          <Input
            id="body"
            type="text"
            value={postBody}
            onChange={onChangePostBodyHandler}
          />
        </FormControl>
      </Box>
      <Box>
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </Box>
    </form>
  );
};
