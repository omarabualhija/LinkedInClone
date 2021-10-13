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
<Section>
    <PotrLogin>
    <h1>Welcome to Your Profeddional Community</h1>
    <img src="Img/loginhero.svg" alt="Img Section "></img>
    </PotrLogin>
    <Google>
        <img src="" alt="google icon"></img>
        <span>Sign in With Google</span>
    </Google>
</Section>
    </Container>
    )
}
 const Container =styled.div`
 padding:0;
 background-color:#FFFFFF;

 `;
 const Nav =styled.div`
     padding: 10px 10%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin: 0 15px;
     flex-wrap: nowrap;
     font-weight:600;
     @media (max-width:480px){
         padding: 15px 0;
         font-weight: 300;
 }


 `;
 const Logo=styled.nav `
 width:130px;
 @media (max-width:480px){
     width: 70px;
 }
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
     color:#9e9e9e;
 }
     &:hover{
         background-color: #EBEBEB;
         border-radius:4px
     }
     `;
 const SignIn=styled.span `
     padding: 10px 20px;
     cursor: pointer;
     border:1px #0073b1 solid;
     border-radius: 34px;
     width: 50%;
     text-align: center;
     &:hover{
     background-color: rgba(112,181,249,0.15);
     color: red;
     box-shadow:0 0 0 2px #0a66c2;
     }
 & >a{
     text-decoration: none;
     color:#0073b1;
 }
 @media (max-width:480px){
     padding: 5px 10px;
 }
 `;
 const Section=styled.div`
 display: flex;
 flex-wrap:wrap;
 margin-top: 40px;
 `;
 const PotrLogin=styled.div`
 `
 const Google =styled.div``