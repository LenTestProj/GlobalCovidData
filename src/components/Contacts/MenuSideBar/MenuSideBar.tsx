import { Link } from 'react-router-dom';
import classes from './MenuSidebar.module.css';
import { useAppSelector } from '../../../store/hooks';

const MenuSideBar:React.FC<{}> = () => {

  const showSideBarMenu = useAppSelector(state=>state.ui.showSideBarMenu);
  

    return (
        <div className={`${classes.sidebar} ${showSideBarMenu?'translate-x-0':'-translate-x-[100%]'}`} style={{zIndex:1000}}>
          <ul className={classes.list}>
            <li className={classes.listItem}><Link to='/contacts/new-contact'>Contact</Link></li>
            <li className={classes.listItem}><Link to='/maps-and-charts'>Charts And Maps</Link></li>
          </ul>
        </div>
      )
}

export default MenuSideBar
