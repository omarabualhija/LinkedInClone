import React from 'react'
import {circlelImg,AddPost,InputPost,IconPost,Sort} from './CenterStyle.js'
export const CenterSide = () => {
    return (
        <div>
            <AddPost>{/*add Post*/}
                
                <InputPost> {/* input */}
                    <img style={circlelImg} src="img/PersonalImg.jpg" alt="Img"/>
                    <div>Start a post</div>
                </InputPost>

                <IconPost>
                    <button><i class="far fa-image"></i><span>Photo</span></button>
                    <button><i class="fab fa-youtube"></i><span>Video</span></button>
                    <button><i class="far fa-calendar-alt"></i><span>Event</span></button>
                    <button><i class="far fa-newspaper"></i><span>Write articale</span></button>
                </IconPost>


                </AddPost>  



            <Sort>  {/*sort*/}
            
              <div>
                  <span >Sort By:</span>
                  <span>Val</span>
                <ul >
                  <li>Recent</li>
                  <li>Top</li>
                </ul>

              </div>

            </Sort>  



            <div></div> {/* post */}
        </div>
    )
}
export default CenterSide;