import { Typography } from "@material-ui/core";
import PostForm from "components/PostForm";
import Head from "next/head";
import { Dictionary } from "const";

const NewPost: React.FC = () => {
  return (
    <>
      <Head>
        <title>{Dictionary.CREATE_NEW_POST}</title>
      </Head>
      <Typography variant="h2">{Dictionary.CREATE_NEW_POST}</Typography>
      <PostForm />
    </>
  );
};
export default NewPost;
