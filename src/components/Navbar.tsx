import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBar from './MenuBar';

const NavLinkClasses=['p-2']

const Navbar:React.FC<{}> = () => {
  return (
    <div className='w-full h-[5vh] flex flex-row justify-between border-2 border-blue-500 bg-blue-300/10
    ' style={{position:'fixed',zIndex:1000}}>
      <MenuBar />
      <div className='flex flex-row justify-center items-center'>
      <NavLink to="/" className={({isActive})=>{
        const navLinkClasses=[...NavLinkClasses];
        isActive ? navLinkClasses.push('underline text-blue-800'):navLinkClasses.push('text-blue-500');
        return navLinkClasses.join(" ");
      }}>Home</NavLink>
      <NavLink to="/Contacts" className={({isActive})=>{
        const navLinkClasses=[...NavLinkClasses];
        isActive? navLinkClasses.push('underline text-blue-700'):navLinkClasses.push('text-blue-600');
        return navLinkClasses.join(" ");
      }}>Contacts</NavLink>
      </div>
    </div>
  )
}

export default Navbar
