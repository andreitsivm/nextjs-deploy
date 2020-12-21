import styled from "styled-components";

export const CommentBody = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  width: 100%;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  .user {
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    img {
      padding: 5px;
    }
  }
  .comment__body {
    flex: 1 0 100%;
  }
`;
