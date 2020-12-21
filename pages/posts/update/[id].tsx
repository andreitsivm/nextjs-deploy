import { Button, FormControl, InputLabel, Input, Box } from "@material-ui/core";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Post } from "store";
import { GetServerSideProps } from "next";
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
        router.push("/posts/[postId]", `/posts/${post.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>Update your post</h1>
      <form onSubmit={updatePost}>
        <Box>
          <FormControl>
            <InputLabel>Post title</InputLabel>
            <Input
              value={newTitle}
              type="text"
              onChange={onChangeTitleHandler}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <InputLabel>Post body</InputLabel>
            <Input value={newBody} onChange={onChangeBodyHandler} />
          </FormControl>
        </Box>
        <Box>
          <Button variant="contained" type="submit">
            Update
          </Button>
        </Box>
      </form>
    </>
  );
};
export default UpdatePost;
