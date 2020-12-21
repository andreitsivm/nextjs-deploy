import { CommentBody } from "./SingleComment.styled";

interface ICommentItemProps {
  body: string;
}

export default function Comment({ body }: ICommentItemProps): JSX.Element {
  return (
    <CommentBody>
      <div className="comment__body">{body}</div>
    </CommentBody>
  );
}
