import React,{ useState } from 'react'
import{Contener ,circlelImg ,TopNav ,LinkElem,BottomNav,Search}from './style.js'

import ReactDOM from 'react-dom';
export default function Nav() {

const [toggleSearch,setToggleSearch]=useState(false);

const mobileTopNav=()=>(
  <TopNav>
<div style={Contener}>
<div style={circlelImg}> img</div>
<div onClick={()=>setToggleSearch(()=>(setToggleSearch(true)))}>
    <div>
        <i className="fas fa-search "></i>
        <input type="input" autoComplete="off" placeHolder="Search"/>
    </div>
 </div>
<div><i className="fas fa-comment-dots fa-lg"></i></div>
</div>
</TopNav>
)




const mobileBottomNav=()=>(
<BottomNav>
    <div style={Contener}>
    <LinkElem exact to='/SignIn'  className="fas fa-home fa-lg"/>
    <LinkElem exact to='/Frinds'  className="fas fa-user-friends fa-lg"/>
    <LinkElem exact to=''  className="fas fa-plus-square fa-lg"/>
    <LinkElem exact to='/notification'  className="fas fa-bell fa-lg"/>
    <LinkElem exact to='Job'  className="fas fa-briefcase fa-lg"/>
    </div>
</BottomNav>


)


const HandelSearch=()=>(
   
        
<Search>
    
   <div >
       <div>
       <i onClick={()=>setToggleSearch(false)} href="https://" className="fas fa-arrow-left"/>
       <input type="text" autoComplete="off" placeholder="Search"/>
     </div>
      <div>
          <div style={circlelImg}>img</div>
          <div>name</div>
      </div>
   </div>
</Search>

)


    return (
       <>
            
        {mobileTopNav()}
  
      
        {mobileBottomNav()}
          
       {toggleSearch && ReactDOM.createPortal(<> {HandelSearch()}</>,document.getElementById('Search') )}
        </>
    )
}

