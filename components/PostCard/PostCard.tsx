import React from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./PostCard.styled";

interface Props {
  id: number;
  title: string;
}

export const PostCard: React.FC<Props> = ({ id, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/posts/[postId]" as={`/posts/${id}`}>
          <Button variant="contained" color="primary" size="small">
            Read Post
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
