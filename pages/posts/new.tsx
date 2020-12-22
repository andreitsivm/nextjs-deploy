import { Typography } from "@material-ui/core";
import PostForm from "components/PostForm";

const NewPost: React.FC = () => {
  return (
    <>
      <Typography variant="h2">Create new post</Typography>
      <PostForm />
    </>
  );
};
export default NewPost;
