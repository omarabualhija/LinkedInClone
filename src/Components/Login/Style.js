
import styled from "styled-components"

export const Container=styled.div`
    max-width: 79%;
    width: 79%;
    margin: auto;
    margin-top: 16px;

    @media (max-width:960px){
    width: 96%;
    max-width: 96%;
    margin: 10px auto;
    }

    @media(max-width:760px){//
        width: 96%;
    max-width: 96%;
    margin: 10px auto ;
    }


 
`

export const Nave=styled.div`
  
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
`

export const Logo=styled.div`
    width: 133px;

    @media(max-width:760px){
        width:15%
    }
`

export const Rigttbtn=styled.div`
    display: flex;
    justify-content: space-between;
   
`

export const Join=styled.div`
    margin-right: 15px;
    padding: 0px 15px;
    display: flex;
    align-items: center;

    & a{
    text-decoration: none;
    color: #a6a6a6;
    font-weight: 600;

    @media (max-width:460px){
    text-decoration: none;
    color: #a6a6a6;
    font-weight: bold;
    font-size: 0.80rem;
}
}

   :hover{
background-color: #ededed;
    border-radius: 4px;
    }

    @media(max-width:760px){
        margin-right: 5px;
        padding: 10px 15px;
        font-size:0.80rem

    }
`
 

export const Signin=styled.div`
    padding: 10px 22px;
    border: 1px solid #0A66C2;
    border-radius: 30px;

    :hover{
     background-color: rgba(112, 181, 249, 0.15);
     color: #0a66c2;
    }

    & a{
    text-decoration: none;
    color: #0a66c2;
    font-weight: bold;
    }

    @media(max-width:760px){
             font-size:0.80rem;
        padding: 7px 10px;
    }

    @media (max-width:460px){
        padding: 3px 4px;
        font-size: 0.8rem;}
`


export const Hero=styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
  margin-top: 80px;
  height:auto;

  & img {
    width:40%;
    flex-shrink: 2;
    align-self: end;

    @media (max-width:760px){
    align-self: center;
    margin-top: 30px;
    width: 80%;}
}

@media (max-width:760px){
  flex-direction: column;
}
`


export const LeftSide=styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    justify-content: space-between;

    & h1{
    font-size: 2.5rem;
    font-weight: 100;
    color:#8f5849;
    line-height:1.5;

    @media (max-width:760px){
   font-size: 1rem;
   text-align: center;
    }
}
  
@media (max-width:760px){
width: 96%;
}
`

export const Links=styled.div`
    margin-top: 16px;

    & a  {
    display: flex;
    justify-content: space-between;
    width: 420px;
    padding: 18px 20px;
    margin-top: 16px;
    text-decoration: none;
    border: 1px #c5c5c5 solid;
    border-radius: 7px;
    color:black;

  :hover{
  box-shadow:2px 4px 10px 1px rgb(0 0 0 / 30%);
    }


    & li{
    list-style: none;
    font-size: 18px;
    }

    @media (max-width:760px){
        width: 96%;
        margin: auto;
        margin-top: 16px;
        font-size:1rem
    }
}




& ul a li{
@media (max-width:760px){
font-size: 16px;
}
}
`

