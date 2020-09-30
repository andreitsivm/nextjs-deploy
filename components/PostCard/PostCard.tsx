import styled from 'styled-components'
import Link from 'next/link'

const Card=styled.div`
    border: 1px solid grey;
    border-radius:5px;
    margin:5px 0;
`;
const CardLink=styled.a`
    padding:10px;
    font-size:22px;
    color:#000;
    text-decoration:none;

&:hover{
    cursor:pointer;
    color:#c62828;
    text-decoration:none;
}
`;

export default function PostCard({id,title}){
    return(
        <Card>
            <div className="card__title">
                <Link href="/posts/[postId]" as={`/posts/${id}`}><CardLink>{title}</CardLink></Link>
            </div>
        </Card>
    )
}