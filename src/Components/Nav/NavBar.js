import React,{ useState } from 'react'
import {Nav,TopNav,BottomNav,circlelImg} from './style.js'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'

export default function NavBar() {

const [toggleSearch,setToggleSearch]=useState(false);

const mobileTopNav=()=>(
    
  <Nav>
<div> 
  
 <TopNav> 
<div style={circlelImg}> img</div>


<div className="boxSearch"
 onClick={()=>setToggleSearch(()=>(setToggleSearch(false)))}>
   
        <i className="fas fa-search "></i>
        <input type="input" autoComplete="off" placeholder="Search"/>
  
</div>
</TopNav>

<BottomNav>   {/*secound chiled */}
    <div >
    <NavLink exact to='/'> <img src="img/nav-home.svg" alt="Home"/> <h6>Home</h6></NavLink>
    <NavLink exact to='/network'> <img src="img/nav-network.svg" alt="network"/> <h6>My Network</h6></NavLink>
    <NavLink exact to='/notification'> <img src="img/nav-notifications.svg" alt="notifications"/> <h6>notifications</h6></NavLink>
    <NavLink exact to='/messaging'> <img src="img/nav-messaging.svg" alt="messaging"/> <h6>Messaging</h6></NavLink>
    <NavLink exact to='/jobs'> <img src="img/nav-jobs.svg" alt="jobs"/> <h6>Jobs</h6></NavLink>
    <NavLink exact to='/work'> <img src="img/nav-work.svg" alt="work"/> <h6>Work</h6></NavLink>
   </div>    
</BottomNav>
</div>
</Nav>
)



const HandelSearch=()=>(
   
        
<div className="Search">
    
   <div >
       <div>
       <i onClick={()=>setToggleSearch(false)} href="https://" className="fas fa-arrow-left"/>
       <input type="text" autoComplete="off" placeholder="Search"/>
     </div>
      <div>
          <div className="circlelImg">img</div>
          <div>name</div>
      </div>
   </div>
</div>

)


    return (
       <>
            
        {mobileTopNav()}
  
      
        {/* {mobileBottomNav()} */}
          
       {toggleSearch && ReactDOM.createPortal(<> {HandelSearch()}</>,document.getElementById('Search') )}
        </>
    )
}

