import React from 'react'
import './style/Header.css'
import { NavLink } from 'react-router-dom'
// import { useEffect } from 'react';



function Header() {

  // const [activeLink, setActiveLink] = useState('');

  // const handleClick = (link) => {
  //   // event.preventDefault();
  //   setActiveLink(link);
  // };

  // useEffect(()=>{
  //   handleClick(Link);
  // },[])
  return (
    <div>
      <div className="nav-wrapper">
        <div className="nav-logo">
          <h1>arlando.</h1>
        </div>
      <ul className='nav-list'>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : 'link')} >Home</NavLink></li>
        <li><NavLink to="/About" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>About</NavLink></li>
        <li><NavLink to="/Karya" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Karya</NavLink></li>
        <li><NavLink to="/Contact" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Contact</NavLink></li>
      </ul>
      </div>
    </div>
  )
}

export default Header
