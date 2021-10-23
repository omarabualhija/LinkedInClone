import React from 'react'
import {Container} from './ContenteStyle'
import LeftSide from './Components/LeftSide'
import CenterSide from './Components/CenterSide'
import RightSide from './Components/RightSide'


const Contents = () => {
    return (
        <Container>
         <LeftSide></LeftSide> 
         <CenterSide/>
         <RightSide></RightSide>
        </Container>
    )
}
export default Contents;