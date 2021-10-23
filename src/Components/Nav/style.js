import styled from "styled-components"

export const circlelImg={
    borderRadius: "60px",
    backgroundColor: "transparent",
    width: "40px",
    height:"40px",
    padding: "0 6px",
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    border: "1px solid #f1f1f1",
};

export const Nav=styled.div`
background-color:white;
width:100%;
}

& > div:first-child{
    display: flex;
    align-items:center;
    width: 100%;
    max-width: 1280px;
    padding:2px 15px;
    margin:  auto;

@media (min-width:768px){
    padding:0px 6px;
    padding: 0px 81px;
    /* width: 1128px; */
    width: 100%;

}

`
export const TopNav=styled.nav`

    display:flex;
    align-items:center;
    width:100%;
    margin: 7px 0;

@media (min-width:768px){
    width: 41%;
    margin-right: 20px;
    margin:0;
}

& > :first-child{
    margin-right:6px
    
}

& >:nth-child(2){ 
    position: relative;
    display: flex;
    align-items: center;
    background-color:#EEF3F8;
    border-radius:4px;
    width: 85%;
    
    @media (min-width:768px){
        width:62%;
    }
& > i{
    position: absolute;
    left: 16px;
    font-size: 14px;
}

& [type="input"]{
    height: 34px;
    border-radius:4px;
    outline:none;
    border:none;
    background-color:transparent;
    font-size:16px;
    width: 90%;
    padding: 0 5px 0 40px;
    width:100%;
 
}

& [type="input"]::placeholder{

    font-size:14px;
    font-weight:100;
    align-items:center;
}
}

`

export const BottomNav=styled.nav`
width: 100%;
position: absolute;
bottom: 0;
left:0;
background-color:white;

@media (min-width:768px){
    position: relative;
    width: 55%;
    
}

& > :first-child {
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
    text-align: center;
    
 
@media (min-width:768px){
    justify-content:start;
}

    & a{
        text-decoration: none;
        color:#b1b1b3;
        font-size:13px;

        @media (min-width:768px){
           
    padding: 1px 1.1rem;
    font-size:16px;
        } 
       
    }
    & .active{
        color:black;
    }

}
`

