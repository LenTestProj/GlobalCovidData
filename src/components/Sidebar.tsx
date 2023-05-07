import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';


const Sidebar:React.FC<{}> = () => {
 
  
  return (
    <div className={classes.sidebar} style={{position:'fixed'}}>
      <ul className={classes.list}>
        <li className={classes.listItem}><Link to='/contacts/new-contact'>Contact</Link></li>
        <li className={classes.listItem}><Link to='/maps-and-charts'>Charts And Maps</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
