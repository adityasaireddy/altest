import "../header/header.style.scss";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className='main-header'>
        <div className='logo'>
          <img src={Logo} alt='Logo' height='50px' width='100%' />
        </div>
        <div className='nav-links'>
          <ul>
            <li className='program'>
              <Link>
                PROGRAMS <IoIosArrowDropdown className='down' />
              </Link>
            </li>
            <li>
              <Link>COURSES</Link>
            </li>
            <li>
              <Link>COLLABORATIONS</Link>
            </li>
            <li>
              <Link>ABOUT US</Link>
            </li>
          </ul>
        </div>
        <div className='toapp'>
          <Link>Login</Link>
          <Link className='ap'>Apply Now</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
