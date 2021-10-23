import styled from 'styled-components'



export const Container =styled.div`
    
    width: 100%;
    background-color: white;
    border-radius: 15px;


& > div{

    & > div:first-child {  //1
      
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid  rgba(0,0,0,0.08);
   
    & > :first-child {
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
    
& > :nth-child(2){
    width: 80px;
    margin-top: -40px;
    border-radius: 40px;
    margin-bottom: 16px;
border:2px solid white;
}

& > :nth-child(3){
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    


    & > div:first-child{
        margin : 12px 0;
        font-weight:600;
    }

    & > div:last-child{
      display: flex;
      justify-content:center;
     gap:8px;
      width: 100%;
      flex-wrap:wrap;
      padding:0 20px;
      font-size:0.9rem;
    color: rgba(0,0,0,0.6);
    }
}

}

& > :nth-child(2){   //2
        padding: 12px ;
        display: flex;
        flex-direction: column;
        row-gap:15px;
        font-size:0.79rem;
        color:gray;
        border-bottom: 1px solid  rgba(0,0,0,0.08);

        & div{
            display: flex;
            justify-content:space-between;
            
        }  
    }

    & > :nth-child(3){    //3
    padding: 12px;
    display: flex;
    flex-direction: column;
    row-gap:5px;
  font-size:0.8rem;
  border-bottom: 1px solid  rgba(0,0,0,0.08);

  & > :first-child {
      color:gray;
  }
  & > :last-child {
font-size:0.85rem;
margin-left: 5px;
    & > :first-child {
        margin-right: 5px;
        color:gold;
    }
  }


    }

    & > :nth-child(4){   //4
        display: flex;
        align-items: center;
        padding:12px;
        font-size:0.9rem;
        & > i{
            font-size:1.4rem;
            margin-right:10px ;
        }

       
    }

}
    
`