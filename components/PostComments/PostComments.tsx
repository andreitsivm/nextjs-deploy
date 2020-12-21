import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, Box, Input } from "@material-ui/core";
import { Comment } from "store";

import SingleComment from "./SingleComment/SingleComent";
import { useStyles } from "./PostComments.style";

interface Props {
  comments: Comment[];
  postId: number;
}

const CommentGroup: React.FC<Props> = ({ comments = [], postId }) => {
  const router = useRouter();
  const classes = useStyles();

  const [comment, setComment] = useState("");

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setComment(target.value);
  };

  const addComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment === "") {
      return;
    }
    axios({
      method: "post",
      url: `https://simple-blog-api.crew.red/comments`,
      data: {
        body: comment,
        postId,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setComment("");
      router.push(`/posts/[postId]`, `/posts/${postId}`);
    });
  };
  return (
    <div>
      {comments.length > 0 ? (
        <div>
          {comments.map((item) => (
            <SingleComment key={item.id} body={item.body} />
          ))}
        </div>
      ) : (
        <p>No comments yet</p>
      )}

      <form className={classes.root} noValidate autoComplete="off">
        <Box>
          <Input id="outlined-basic" onChange={changeHandler} />
        </Box>
        <Box>
          <Button variant="contained" color="primary" onClick={addComment}>
            Add comment
          </Button>
        </Box>
      </form>
    </div>
  );
};
export default CommentGroup;
