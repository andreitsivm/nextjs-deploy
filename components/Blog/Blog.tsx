import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "components/PostCard";
import { Post } from "store";

import { useStyles } from "./Blog.styled";

interface Props {
  posts: Post[];
}
const Blog: React.FC<Props> = ({ posts }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      direction="column-reverse"
      className={classes.blogWrap}
    >
      {posts.map(({ id, title }) => (
        <Grid key={id} item xs={12} sm={12}>
          <PostCard id={id} title={title} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Blog;
