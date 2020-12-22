import React from "react";
import { Paper } from "@material-ui/core";
import { useStyles } from "./SingleComment.styled";

interface Props {
  body: string;
}

const SingleComment: React.FC<Props> = ({ body }) => {
  const classes = useStyles();

  return (
    <Paper variant="elevation" elevation={12} className={classes.paper}>
      {body}
    </Paper>
  );
};

export default SingleComment;
