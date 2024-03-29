import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
const [open,setOpen] = useState(false)
const handleOpen = ()=>{
  setOpen(!open)
}

const [SidebarOpen,setSidebarOpen] = useState(false)
const handleSideBar =()=>{
  setSidebarOpen(!SidebarOpen)
}
  
  return (
    <>
      <nav className="navbar">
        <div className="logo_item">
          <i className="bx bx-menu" onClick={handleSideBar} id="sidebarOpen"></i>
          ISC MAXFIT
        </div>
        <div className="navbar_content">
          <i className="bi bi-grid"></i>
          <i className='bx bx-sun' id="darkLight"></i>
          <i className='bx bx-bell' ></i>
        </div>
      </nav>
      {/* <!-- sidebar --> */}
      <nav className={`sidebar ${SidebarOpen ? "close" : ""} `} >
      {/* <nav className="sidebar" > */}
        <div className="menu_content">
          <ul className="menu_items">
            {/* <div className="menu_title menu_dahsboard"></div> */}
            {/* <!-- duplicate or remove this li tag if you want to add or remove navlink with submenu -->
            <!-- start --> */}
            {/* <li className="item">
              <div href="#" onClick={handleOpen} className="nav_link submenu_item">
                <span className="navlink_icon">
                  <i className="bx bx-home-alt"></i>
                </span>
                <span className="navlink">Home</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </div>
              <ul className={`menu_items submenu ${open ? "shownav":""} `}>
                <Link to={''} className="nav_link sublink">Nav Sub Link</Link>
                <Link to={''} className="nav_link sublink">Nav Sub Link</Link>
                <Link to={''} className="nav_link sublink">Nav Sub Link</Link>
                <Link to={''} className="nav_link sublink">Nav Sub Link</Link>
              </ul>
            </li> */}
            {/* <!-- end -->
            <!-- duplicate this li tag if you want to add or remove  navlink with submenu -->
            <!-- start --> */}
            {/* <li className="item">
              <div href="#" className="nav_link submenu_item">
                <span className="navlink_icon">
                  <i className="bx bx-grid-alt"></i>
                </span>
                <span className="navlink">Overview</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </div>
              <ul className="menu_items submenu">
                <Link to={''} className="nav_link sublink">Nav Sub Link</Link>
                <Link to={''} className="nav_link sublink">Nav Sub Link</Link>
                <Link to={''} className="nav_link sublink">Nav Sub Link</Link>
                <Link to={''} className="nav_link sublink">Nav Sub Link</Link>
              </ul>
            </li> */}
            {/* <!-- end --> */}
          </ul>
          <ul className="menu_items">
            <div className="menu_title menu_editor"></div>
            {/* <!-- duplicate these li tag if you want to add or remove navlink only --> */}
            
            <li className="item">
              <Link to={''} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bxs-magic-wand"></i>
                </span>
                <span className="navlink">Home</span>
              </Link>
            </li>
            
            <li className="item">
              <Link to={'/create-category'} className="nav_link">
                <span className="navlink_icon">
                  <i class='bx bx-add-to-queue'></i>
                </span>
                <span className="navlink">Create pipe Category</span>
              </Link>
            </li>
            <li className="item">
              <Link to={'/all-category'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-filter"></i>
                </span>
                <span className="navlink">All pipe Category</span>
              </Link>
            </li>
            <li className="item">
              <Link to={'/create-product'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-cloud-upload"></i>
                </span>
                <span className="navlink">Add pipe Product</span>
              </Link>
            </li>
            <li className="item">
              <Link to={'/all-products'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-loader-circle"></i>
                </span>
                <span className="navlink">All Pipe Products</span>
              </Link>
            </li>
          </ul>
          <ul className="menu_items">
            <div className="menu_title menu_setting"></div>
            <li className="item">
              <Link to={'/all-tap-category'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-filter"></i>
                </span>
                <span className="navlink">All Tap Category</span>
              </Link>
            </li>
            <li className="item">
              <Link to={'/all-tap-products'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-loader-circle"></i>
                </span>
                <span className="navlink">All Tap Products</span>
              </Link>
            </li>
          </ul> 
          <ul className="menu_items">
            <div className="menu_title menu_media"></div>
            <li className="item">
              <Link to={'/media-center'} className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-filter"></i>
                </span>
                <span className="navlink">Media Center</span>
              </Link>
            </li>
          </ul> 
          {/* <!-- Sidebar Open / Close --> */}
          <div className="bottom_content">
            <div className="bottom expand_sidebar">
              <span> LOG OUT</span>
              <i className='bx bx-log-in' ></i>
            </div>
            <div className="bottom collapse_sidebar">
              <span> LOG OUT</span>
              <i className='bx bx-log-out'></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header