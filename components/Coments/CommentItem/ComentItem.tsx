import styled from 'styled-components'




const Comment=styled.div`
border:1px solid grey;
border-radius:5px;
width:100%;
margin:10px;
padding:5px;
display:flex;
justify-content:space-between;
.user{
    margin-right:40px;
    display:flex;
    flex-direction:column;
    img{
        padding:5px;
    }
}
.comment__body{
    flex:1 0 100%;
}

`;

interface ICommentItemProps{
    body:string
}

export default function CommentItem({body}:ICommentItemProps):JSX.Element{
    return(
        <Comment>
            <div className="user">
                <h5>Guest</h5>
                <img src="https://www.waspcom.com/wp-content/uploads/2014/10/user-placeholder-circle-1-300x300.png" alt="User" width="50px" height="50px"/></div>
            <div className="comment__body">{body}</div>
        </Comment>

    )
}