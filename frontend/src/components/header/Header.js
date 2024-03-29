import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
// import logo from './logo.png'
import logo from '../../isclogo.png'

const Header = () => {
    const [isActiveAbout, setIsActiceAbout] = useState(false)
    const [isActiveService, setIsActiceService] = useState(false)
    const [isActiveCareer, setIsActicecareer] = useState(false)
    const [isActiveclient, setIsActiceclient] = useState(false)
    const [isActiveMenuDropdown , setIsActiveMenuDropDown] = useState(false)

    const handleActiveAbout = () => {
        setIsActiceAbout(!isActiveAbout)
    }

    const handleDeActiveAbout = () => {
        setIsActiceAbout(false)
    }

    const handleActiveService = () => {
        setIsActiceService(!isActiveService)
    }

    const handleDeActiveService = () => {
        setIsActiceService(false)
    }

    const handleActiveCareer = () => {
        setIsActicecareer(!isActiveCareer)
    }

    const handleDeActiveCareer = () => {
        setIsActicecareer(false)
    }

    const handleActiveClient = () => {
        setIsActiceclient(!isActiveclient)
    }

    const handleDeActiveClient = () => {
        setIsActiceclient(false)
    }

    const handleActiveMenuDropDown = () =>{
        setIsActiveMenuDropDown(!isActiveMenuDropdown)
    }

    const handleDeActiveMenuDropDown = () =>{
        setIsActiveMenuDropDown(false)
    }

    return (
        <>
            <header className='header'>
                <div className="container">
                    <Link onClick={handleDeActiveMenuDropDown} to={'/'} className="logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <nav>
                        <ul className={`main-ul ${isActiveMenuDropdown ? 'mainmenudropdown' : ''}`}>
                            <li>
                                <Link className='for-white' onClick={handleDeActiveMenuDropDown} to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link className='for-white' onClick={handleDeActiveMenuDropDown} to={'/about-us'}>About Us</Link>
                            </li>
                            <li onMouseEnter={handleActiveAbout} onMouseLeave={handleDeActiveAbout} className='about-pointer'>
                                <Link  className='for-white' >Our Products</Link>
                                <ul className={`about-hover hp ${isActiveAbout ? 'active-about-hover' : ''}`}>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/our-products'}>Pipes & Fittings</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/tap-products'}>Taps Collection</Link>
                                    {/* <Link onClick={handleDeActiveMenuDropDown} to={'/product'}>uPVC Pipes Fittings</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/product'}>cPVC Pipes Fittings</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/product'}>SWR Pipes Fittings</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/product'}>Agriculture (Rigid) PVC Pipes & Fittings</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/product'}>Brass & Metal Products</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/product'}>Submersible Column Pipes</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/product'}>Casing Pipes</Link> */}
                                </ul>
                            </li>
                            {/* <li onMouseEnter={handleActiveService} onMouseLeave={handleDeActiveService} className='services-pointer'>
                                <Link className='for-white'>Services</Link>
                                <ul className={`services-hover ${isActiveService ? 'active-service-hover' : ''}`}>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/fiber'}>Optical Fiber Works</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/manufacturing'}>Manufacturing</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/telecom'}>Telecom Infrastructure</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/solar'}>Solar Services</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/project-managment'}>Project Mangament Services</Link>
                                </ul>
                            </li>
                            <li className='career-pointer' onMouseEnter={handleActiveCareer} onMouseLeave={handleDeActiveCareer}>
                                <Link className='for-white'>Career</Link>
                                <ul className={`career-hover ${isActiveCareer ? 'active-career-hover' : ''}`}>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/why-join'}>Why Join Us</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/resources'}>Human Resources & Development</Link>
                                </ul>
                            </li>
                            <li className='client-pointer' onMouseEnter={handleActiveClient} onMouseLeave={handleDeActiveClient}>
                                <Link className='for-white'>Our Clients</Link>
                                <ul className={`client-hover ${isActiveclient ? 'active-client-hover' : ''}`}>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/client'}>Clients</Link>
                                    <Link onClick={handleDeActiveMenuDropDown} to={'/presence'}>Our Presence</Link>
                                </ul>
                            </li> */}
                            <li>
                                <Link className='for-white' onClick={handleDeActiveMenuDropDown} to={'/media-center'}>Media Center</Link>
                            </li>
                            <li>
                                <Link className='for-white' onClick={handleDeActiveMenuDropDown} to={'/solution'}>Solutions</Link>
                            </li>
                            <li>
                                <Link className='for-white' onClick={handleDeActiveMenuDropDown} to={'/distributor-form'}>Distributor</Link>
                            </li>
                            <li>
                                <Link onClick={handleDeActiveMenuDropDown} className='for-white' to={'/contact-us'}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <div onClick={handleActiveMenuDropDown} className="menu-bar">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </div>
                </div>
            </header>
        
            {/* <!-- ----------Whatsapp---------- --> */}
            <a href="https://api.whatsapp.com/send?phone=919319037605" target="_blank" class="whatsapp_float"><i class="fa-brands fa-whatsapp whatsapp-icon"></i></a>

        </>
        
    )
}

export default Header