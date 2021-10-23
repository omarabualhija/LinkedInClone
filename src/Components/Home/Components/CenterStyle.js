import styled from 'styled-components'

export const circlelImg={
    borderRadius: "60px",
    backgroundColor: "transparent",
    width: "45px",
    height:"45px",
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    border: "1px solid #f1f1f1",
};

export const AddPost=styled.div`
    background-color: white;
    padding: 15px 10px;
    border-radius: 15px;
    border: 1px solid #dbd8d8;
    color:rgba(0,0,0,0.6);
    font-size:0.8rem;
    font-weight:600;
    
`

export const InputPost=styled.div`
display:flex;
align-items: center;
margin-bottom: 10px;


& > :first-child{
    margin-right: 5px;
}

& :nth-child(2){
    padding: 15px 10px;
    width: 90%;
    border: 1px solid #d1d1d5;
    border-radius: 30px;
    cursor:pointer;
    background-color: rgba(235, 235, 235,1);
  
}


`

export const IconPost=styled.div`
    display: flex;
   
    justify-content: space-between;

    & button {
        display: flex;
        padding:10px;
        align-items: center;
        flex-direction: column;
        row-gap:5px;
    background-color:transparent;
    border:none;
    color:rgba(0,0,0,0.6);
    font-size:0.80rem;
    font-weight:600;
    cursor:pointer;
    :hover{
        background-color: rgba(235, 235, 235,1);
        border-radius:4px
    }

    @media (min-width: 768px) {
        flex-direction:row;
        align-items: center;
    }
    }
    & button i {
        margin-right:8px;
        font-size:20px;
    }

    & > :nth-child(1) i{
        color: #70b5f9;
    }
    & > :nth-child(2) i{
       color: #7fc15e;

    }
    & >  :nth-child(3) i{
      color:  #e7a33e;
    }

    & > :nth-child(4) i{
    color:#fc9295;
    }
`


export const Sort =styled.div`
width:100%;
display:flex;
justify-content:end;
position:relative;
padding:15px;
font-size:0.8rem;

::before {
    content:"";
    height:1px;
    width: 85%;
    position: absolute;
    background-color:black;
   left:0;
    top:50%;
}

& > div > ul{   ///back to sort
    position:absolute;
    width: 20%;
    right: 0;
    top: 45px;
    background-color: white;
    padding: 10px 0;
    border-radius:4px;
    display:none;

    & li{
        padding: 6px;
    color: #898989;
    border-left: 2px solid #1ead12;
    }
}

`