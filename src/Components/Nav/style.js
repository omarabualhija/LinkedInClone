import styled from "styled-components"
import { NavLink } from 'react-router-dom'

export const Contener={
    width:"94%",
    margin:"auto",
    };
    
   export const circlelImg={
        borderRadius: "60px",
        backgroundColor: "transparent",
        width: "40px",
       height:"40px",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        border: "1px solid #f1f1f1",
    };
    
   export  const TopNav=styled.nav`
    position: fixed;
    background-color:white;
    width: 100%;
    padding:5px 0;
    border-bottom: 1px solid #c1c1c1;
    & div{
       
        margin: auto;
        display: flex;
        justify-content: center;
    
     
    
        & div:nth-child(2){
        width: 70%;
        position: relative;
        flex-shrink: 1.5;
        background-color: #eef3f8;
        border-radius:4px;
    
        & div {
            justify-content: end;
            width: 100%;
           
    
            & i{
     position: absolute;
        top: 7px;
        left:4px;
        }
    [type="input"] {
        width: 88%;
        height: 30px;
        outline: none;
        border: none;
        background-color: #eef3f8;
    
        border-radius:4px;
        font-size: 16px;
       
        color: #c1c1c1;
    
    }
    
    }
        }
    
    }
    
    `
    
    
   export  const BottomNav=styled.div`
    width:100%;
    position:fixed;
    bottom:0;
    background-color:white;
    border-top: 1px solid #c1c1c1;
    z-index: -1;
    
    
    & div{
        width: 94%;
        margin: auto;
        padding: 22px 0px !important;
        display: flex;
        justify-content: space-around;
    }
    
    `
    
   export  const LinkElem = styled(NavLink)`
      text-decoration:none;
          color:rgba(0,0,0,0.45);
    &.active {
      color: black;
    }
    `;


export const Search=styled.div`
width:100%;
height:100vh;
background-color:white;



> div{
   display:flex;
   flex-direction:column;
   
        & div:first-child {    
       display:flex;
       height: 50px;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    & >i{
        margin: 0px 20px;
    };
    & >input{
    width: 65%;
    height: 30px;
    border: none;
    font-size:16px;
    margin-left: 15px;
    color:#c1c1c1;
    :focus{
   outline:none;
   color:black;
   font-size:16px
    };
    };

        }

    div:last-child {
    margin-top: 15px;
    display: flex;
    align-items: baseline;
    width:70%auto;
    overflow:hidden;

      & div:first-child {
    margin-right: 20px;
    margin-left: 10px;
    }

    }
}


`