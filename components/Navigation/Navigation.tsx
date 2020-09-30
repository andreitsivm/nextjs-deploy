
import Link from 'next/link'
import styled from 'styled-components'
import {Container} from 'react-bootstrap'

const NavBar=styled.nav`
  
      a{
        cursor:pointer;
        color:#fff;
        font-size:16px;
        font-weight:bold;
        text-decoration:none;
        margin-right:30px;
        &:hover{
            color:darkred;
            text-decoration:none;
        }
      }
    `;

const Navigation=()=>{

    return(
      <NavBar>
          <Container>
      <Link href="/"><a>Blog</a></Link>
      <Link href="/posts/new"><a>New Post</a></Link>
    </Container>
  </NavBar>

    )
}
export default Navigation