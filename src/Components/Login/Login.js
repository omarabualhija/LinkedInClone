import React from 'react'
import {Link} from "react-router-dom"
import {Container,Nave,Logo,Rigttbtn,Join,Signin,Hero,LeftSide,Links} from './Style'




export default function Login() {
    return (

    <Container>
        < Nave >
        <Logo>
            <Link to="/"><img src="Img/loginlogo.svg" alt="Logo LinkedIn"></img></Link>
        </Logo>
        <Rigttbtn>
        <Join Link><Link to="/SignUp">Join Now</Link></Join>
        <Signin><Link to="/SignIn">Sign in</Link></Signin>
        </Rigttbtn>
        </Nave>

 <Hero>
    <LeftSide >
    <h1>Welcome to Your Professional Community</h1>
  
   <Links>
       <a href="##" ><li href="##">Search For a job</li><i className="fas fa-chevron-right"></i></a>
       <a  href="##"><li href="##">Find a Person You Know</li><i className="fas fa-chevron-right"></i></a>
       <a  href="##"><li href="##">Learn a new skill</li><i className="fas fa-chevron-right"></i></a>
       
   </Links>
    </LeftSide>
    <img className="bigImg" src="Img/SectionImg.svg" alt="Img Section "></img>

   </Hero> 
 
</Container>
)}
  