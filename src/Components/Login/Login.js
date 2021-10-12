import React from 'react'
import {Link} from "react-router-dom"

import styled from 'styled-components'
export default function Login() {
    return (
    
    <Container>
        <Nav>
        <Logo>
            <Link to="/"><img src="Img/loginlogo.svg" alt="Logo LinkedIn"></img></Link>
        </Logo>
        <div>
        <Join><Link to="/SignUp">Join Now</Link></Join>
        <SignIn><Link to="/SignIn">Sign in</Link></SignIn>
        </div>
        </Nav>
    </Container>
    )
}

const Container =styled.div``;

const Nav =styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 0 15px;

    & div{
        display: flex;
        width: 15%;
    justify-content: space-between;
      align-items:center
    }

`;
const Logo=styled.nav `
width: 10%;

& > img{
    width: 100%;
}
`;


const Join=styled.span`
    display: inline-block; 
    margin-right: 10px;
    padding: 15px 10px;
    cursor: pointer;
    

& a {
    text-decoration: none;
}
    &:hover{
        background-color: #EBEBEB;
        border-radius:4px
    }
    `;

const SignIn=styled.span`
     padding: 15px 10px;
    cursor: pointer;
    background-color: rgba(112,181,249,0.15);
    border-radius: 34px;
    width: 50%;
    text-align: center;
    & :hover{
        background-color: rgba(112,181,249,0.15);
    color: #0a66c2;
    };
    & a {
    text-decoration: none;
};
`;