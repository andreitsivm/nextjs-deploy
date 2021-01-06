import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
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

  const addComment = () => {
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
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

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
        <form onSubmit={handleSubmit(addComment)}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="postComment"
                value={comment}
                onChange={changeHandler}
                label="Enter your comment"
                variant="outlined"
                inputRef={register({
                  required: "Comment cannot be empty",
                })}
                error={!!errors.postComment}
                helperText={errors?.postComment?.message}
                multiline
                fullWidth
                rows={6}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
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
