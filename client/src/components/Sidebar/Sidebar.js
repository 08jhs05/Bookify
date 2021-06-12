import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ReceiptIcon from '@material-ui/icons/Receipt';

import { useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <section className="side_bar">
      <img
        className="logo"
        src="/icons/logo.png"
        alt="logo icon"
      />
      <div className="sidebar__menu">
        <nav className={location.pathname === "/" ? "nav_item_selected" : "nav_item"}>
          <Link className={location.pathname === "/" ? "nav__link_selected" : "nav__link"} to="/"><HomeIcon style={{width:'40px', height:'32px'}}/></Link>
        </nav>
        <nav className={location.pathname === "/incomes" ? "nav_item_selected" : "nav_item"}>
          <Link className={location.pathname === "/incomes" ? "nav__link_selected" : "nav__link"} to="incomes"><KeyboardArrowUpIcon style={{width:'40px', height:'40px'}}/></Link>
        </nav>
        <nav className={location.pathname === "/expenses" ? "nav_item_selected" : "nav_item"}>
          <Link className={location.pathname === "/expenses" ? "nav__link_selected" : "nav__link"} to="expenses"><KeyboardArrowDownIcon style={{width:'40px', height:'40px'}}/></Link>
        </nav>
        <nav className={location.pathname === "/scan" ? "nav_item_selected" : "nav_item"}>
          <Link className={location.pathname === "/scan" ? "nav__link_selected" : "nav__link"} to="scan"><CameraAltIcon style={{width:'40px', height:'32px'}}/></Link>
        </nav>
        <nav className={location.pathname === "/receipts" ? "nav_item_selected" : "nav_item"}>
          <Link className={location.pathname === "/receipts" ? "nav__link_selected" : "nav__link"} to="receipts"><ReceiptIcon style={{width:'40px', height:'32px'}}/></Link>
        </nav>
      </div>
    </section>
  );
}
