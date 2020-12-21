import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { Box, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import PostComments from "components/PostComments/PostComments";
import { blogApi } from "apiRequests/api";
import { Post } from "store";

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
      router.replace("/");
    });
  };
  const goToUpdate = () => {
    router.push("/posts/update/[id]", `/posts/update/${id}`);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <Box>
        <Button variant="contained" onClick={goToUpdate}>
          Update post
        </Button>
        <Button variant="contained" onClick={deletePost}>
          Delete post
        </Button>
        <Box />
        <PostComments comments={comments} postId={id} />
        <Link href="/">
          <Button variant="contained">Follow Back</Button>
        </Link>
      </Box>
    </>
  );
};
export default SinglePost;
