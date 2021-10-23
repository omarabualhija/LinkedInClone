import styled from 'styled-components';


export const Container=styled.div`
width:100%;
max-width:1128px ;
margin:auto;
margin-top:50px;
margin: auto;
margin-top: 50px;
display: grid;
grid-template-columns: 1fr ;
column-gap: 25px;
grid-template-areas:"Center";
padding: 0 10px;

& > :nth-child(1){
            display:none;
        }
        & > :nth-child(2){
            grid-area:Center;
        }
        & > :nth-child(3){
            display:none;
        }

 @media (min-width:768px){
     width:100%;
    grid-template-columns: minmax(0,0.4fr) 1fr minmax(0,0.5fr);
    grid-template-areas:"left Center right";
    column-gap: 20px;

    & > :nth-child(1){
            display:block;
            grid-area:left;
        }

    & > :nth-child(2){
            grid-area:Center;
        }
    
    & > :nth-child(3){

            display:block;
            grid-area:right;
        }
    }
    
    
`