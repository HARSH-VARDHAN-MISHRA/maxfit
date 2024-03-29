import React from 'react'
import './AboutImg.css'
import img from './aboutImg.png'
import { Link } from 'react-router-dom'
import logo from '../header/logo.png'

const AboutImg = () => {
  return (
    <>
        <section className="about container">
            <div className=" row">
                <div className="col-md-4">
                    <img src={img} alt="about-image"  />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <img src={logo}  alt="maxfit-logo" className='maxfit-logo' />
                    <h3 className="underline-head">Make Your <span>Dream Home</span> Come True</h3>
                    <p className='text'>This is the story of a team that followed an in- novation and uncompromised Quality. ISC has been relentless in it's commitment to Quality and service since 2018. </p>
                    <p className='text'>The leader in the cPVC Pipes and Fittings is ISO 9001:2015 certified company, the company employees latest processess and techniques to manufacture quality Pipes and Fittings. Qualified and highly experienced workforce and stringent processes and systems ensure pro- ducts are the finest in the industry in terms of Quality and Performance.</p>
                    <p className='text'>Maxfit values are driven by happy customers and growth is recorded in satisfied smiles.</p>
                    <div className="">
                        <Link to={'/about-us'} className="btn-1">KNOW MORE</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutImg