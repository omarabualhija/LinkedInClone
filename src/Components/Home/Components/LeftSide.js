import React from 'react'

import {Container} from './LeftSideStyle.js'


 const LeftSide = () => {
    return (
        <Container>
            <div>


           <div>{/* 1*/}
             <img src="img/card.svg" alt="card Img"/>  
            <img src="img/PersonalImg.jpg" alt="Personal Img"/>
            <div>
                <div>Eng-Omar Abu Alhija</div>
                
            <div><span> junior full-stack developer </span><span>React js</span><span>MVC</span></div>
            
            </div>     
            </div> 


        <div>  {/*   2*/ }
            <div><span>Connections</span><span>215</span></div>
            <div><span>Who viewed your profile</span><span>30</span></div>
        </div>


          <div>    {/*3*/ }
              <div>Access exclusive tools &#38; insights</div>
              <div><i className="fas fa-stop"></i><span>Try Premium for free</span></div>
          </div>


       <div>     {/* 4 */}
       <i class="fas fa-bookmark"></i>
           <span> My Items</span>
       </div>

            </div>
        </Container>
    )
}
export default LeftSide