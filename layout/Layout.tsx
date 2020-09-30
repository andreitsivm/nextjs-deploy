import styled from 'styled-components'
import Head from 'next/head';
import Navigation from './../components/Navigation/Navigation';
import {Container} from 'react-bootstrap'


const Template=styled.div`


header{
    height:80px;
    background-color:#000;
    display:flex;
    align-items:center;
}
`;
const Layout=({children,title})=>{


    return(
        <Template>
            <Head>
                <title>{title}</title>
            </Head>
        <header>
            <Navigation/>
        </header>
        <main>
            <Container>
            {children}
            </Container>
        </main>
        <footer>
        </footer>
        </Template>
    )
}


export default Layout