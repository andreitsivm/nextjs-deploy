import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import { blogApi } from "apiRequests/api";
import { Comment } from "store";

import SingleComment from "./SingleComment/SingleComent";

interface Props {
  comments: Comment[];
  postId: number;
}

const CommentGroup: React.FC<Props> = ({ comments = [], postId }) => {
  const router = useRouter();

  const [comment, setComment] = useState("");

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setComment(target.value);
  };

  const addComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment === "") {
      return;
    }
    blogApi
      .createComment({
        body: comment,
        postId,
      })
      .then(() => {
        setComment("");
        router.push(`/posts/[postId]`, `/posts/${postId}`);
      });
  };

  return (
    <Grid container direction="column" spacing={3}>
      {comments.length > 0 ? (
        comments.map(({ id, body }) => (
          <Grid item xs={12} sm={12} key={id}>
            <SingleComment body={body} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} sm={12}>
          <Typography variant="h5">No comments yet</Typography>
        </Grid>
      )}
      <Grid item xs={12} sm={12}>
        <form noValidate autoComplete="off">
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                value={comment}
                onChange={changeHandler}
                label="Enter your comment"
                variant="outlined"
                multiline
                fullWidth
                rows={10}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={addComment}>
                Add comment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
export default CommentGroup;
