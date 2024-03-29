import React, { useEffect, useState } from 'react'
import './SingleProductPage.css'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import table from './upvc-table.png'
import cpvc from './cpvc.png'
import icon1 from './icons/1.png'
import icon2 from './icons/2.png'
import icon3 from './icons/3.png'
import icon4 from './icons/4.png'
import icon5 from './icons/5.png'
import icon6 from './icons/6.png'
import icon7 from './icons/7.png'
import icon8 from './icons/8.png'
import icon9 from './icons/9.png'
import icon10 from './icons/10.png'
import icon11 from './icons/11.png'
import icon12 from './icons/12.png'
import { Link, useParams } from 'react-router-dom'
import AllProduct from '../allProduct/AllProduct'

import cutting from './jointMethod/cutting.jpg'
import chamfering from './jointMethod/chamfering.jpg'
import deburring from './jointMethod/deburring-and-ridge-removal.jpg'
import cleaning from './jointMethod/cleaning.jpg'
import application from './jointMethod/application-of-solvent-cement.jpg'
import application2 from './jointMethod/application-of-solvent-cement2.jpg'
import doNot from './jointMethod/do-not-hammer.jpg'
import axios from 'axios'
import ModelPopup from '../ModelPopup/ModelPopup'

const SingleProductPage = () => {
    
    const { name } = useParams()
    // console.log(name)
    const icons = [
        {
            img: icon1
        },
        {
            img: icon2
        },
        {
            img: icon3
        },
        {
            img: icon4
        },
        {
            img: icon5
        },
        {
            img: icon6
        },
        {
            img: icon7
        },
        {
            img: icon8
        },
        {
            img: icon9
        },
        {
            img: icon10
        },
        {
            img: icon11
        },
        {
            img: icon12
        },
    ]

    // -- For Joint Methods
    const jointMethods = [
        {
            id: 1,
            img: cutting,
            head: "1. Cutting"
        },
        {
            id: 2,
            img: chamfering,
            head: "2. Chamfering"
        },
        {
            id: 3,
            img: deburring,
            head: "3. Deburring and Ridge Removal"
        },
        {
            id: 4,
            img: cleaning,
            head: "4. Cleaning"
        },
        {
            id: 5,
            img: application,
            head: "5. Application Of Solvent Cement"
        },
        {
            id: 6,
            img: application2,
            head: "6. Application Of Solvent Cement"
        },
        {
            id: 7,
            img: doNot,
            head: "7. Do Not Hammer"
        }
    ];

    // -- hold the main category
    const [litexCate,setlitexCate] = useState();
    const fetchCategy = async ()=>{
        try {
            const cateResponse = await axios.get('http://localhost:7000/api/v1/get-category');
            const filteredCategory = cateResponse.data.data.filter((item)=> item.categoryName === name)
            // console.log(filteredCategory);
            setlitexCate(filteredCategory);
        } catch (error) {
            console.log(error)
        }
    }

    // -- Holds all the related products
    const [litexProducts, setlitexProducts] = useState([]);
    const handleFetch = async () => {
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-product')
            const fillterProducts = res.data.data.filter((item) => item.prodCategory === name)
            console.log(fillterProducts)
            setlitexProducts(fillterProducts)
        } catch (error) {
            console.error(error)
        }
    }
    const [open, setOpen] = useState(false);
    const [imgModel, setImageModal] = useState(null);
    const [modelName,setModelName] = useState(null);
  
    const handleMoldelImage = (img,modelProName) => {
      setImageModal(img);
      setModelName(modelProName)
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setImageModal(null); // Reset imgModel when closing modal
    };
    // console.log("litexProducts ",litexProducts)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        handleFetch()
        fetchCategy()
    }, [name])

    return (
        <>
            <Breadcrumb title={name} middle={{ url: '/our-products', text: 'Our Products' }} last={name} />

            <section className="productDesc">
                <div className="container">
                    <div className="headLine">
                        <h3>{name} PIPES FITTINGS</h3>
                        <span className='line'></span>
                    </div>
                    {/* <div className="row mb-5">
                        <div className="col-md-8">
                            {litexCate.length > 0 && (
                                <>
                                    <p className='text'>{litexCate[0]?.prodDesc || " op"}</p>
                                    <p className='text'>{litexCate[0]?.prodDesc1 || " op"}</p>
                                </>
                            )}
                        </div>
                        <div className="col-md-4">
                            {litexCate.length > 0 && (
                                <div className="img">
                                    <img src={litexCate[0].prodImage} alt="cpvc Pipes" />
                                </div>
                            )}
                        </div>
                    </div> */}
                    {litexCate && litexCate.length > 0 && (
                        <div className="row mb-5">
                            <div className="col-md-8">
                            <p className='text'>{litexCate[0].description}</p>
                            <p className='text'>{litexCate[0].description_second}</p>
                            </div>
                            <div className="col-md-4">
                            <div className="img">
                                <img src={litexCate[0].categoryImage} style={{maxHeight:'250px', objectFit:'contain'}} alt="Pipes" />
                            </div>
                            </div>
                        </div>
                    )}

                    <div className="row table-row mb-5">
                        {/* <div className="col-md-6">
                            <div className="smallHeadLine">
                                <h4>CPVC Pipe & Fittings as per ASTM D -2846</h4>
                                <span className='line'></span>
                            </div>
                            <table class="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th className='main' colSpan={4}>PIPE SDR-11</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">SIZE (mm)</th>
                                        <th scope="col">SIZE (inch)</th>
                                        <th scope="col">Std.Pkg. (Nos)</th>
                                        <th scope="col">PRICE( ) Per pc.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>20</td>
                                        <td>3/4"</td>
                                        <td>60</td>
                                        <td>320.00</td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>1"</td>
                                        <td>40</td>
                                        <td>481.00</td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>1.1/4"</td>
                                        <td>25</td>
                                        <td>732.00</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>1.1/2"</td>
                                        <td>20</td>
                                        <td>951.00</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>2"</td>
                                        <td>10</td>
                                        <td>1,682.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
                        <div className="col-md-6">
                            <div className="smallHeadLine">
                                <h4>FEATURES</h4>
                                <span className='line'></span>
                            </div>
                            <ol >
                                <li>Excellent resistance to corrosion and chemical attacks</li>
                                <li>Maintenance - free & easy to install</li>
                                <li>Simple and leak proof joint</li>
                                <li>Better insulation properties</li>
                                <li>Designed to last for ages</li>
                                <li>Most cost -effective</li>
                                <li>Low thermal conductivity</li>
                                <li>UV resistant</li>
                                <li>Service temperature up to 60 C</li>
                            </ol>

                        </div>
                    </div>

                    {/* --- Icons Grid ---  */}
                    <div className="row singIco">
                        {icons.map((item, index) => (
                            <div className="icon">
                                <img src={item.img} alt="icon-img" decoding='async' loading='lazy' />
                            </div>

                        ))}
                    </div>
                </div>
            </section>
            <section className='container mt-5'>
                <div className="row">
                    <div className="headLine">
                        <h3>{name} Products</h3>
                        <span className='line'></span>
                    </div>
                </div>
            </section>
            {/* <AllProduct /> */}
  

            {/* --- All Related Products ---  */}
            <section className='my-5'>
                <div className="container">
                    <div className="all-products">
                        <div className="product-grid">
                            {litexProducts && litexProducts.map((pro,index)=>(
                                <div data-bs-toggle="modal"  onClick={()=>{handleMoldelImage(pro.prodTableImage,pro.productName)}} className="single" key={index}>
                                    <img src={pro.prodImage} alt="" />
                                    <p className="pro-name">{pro.productName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- Jointing Methods -----  */}
            <section className='container mt-5'>
                <div className="row">
                    <div className="headLine">
                        <h3>JOINTING METHODS</h3>
                        <span className='line'></span>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            {jointMethods.map((item, index) => (
                                <div className="col-md-4 col-6 mb-2" key={index}>
                                    <img src={item.img} alt="joint-method-image" className='mb-2' />
                                    <h5 style={{ fontWeight: '400', fontSize: '1rem' }}>{item.head}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 uls">
                        <h4 className='bg-blue'>UPVC, CPVC & PVC JOINT METHOD STEP</h4>
                        <ol>
                            <li>Square pipe ends and remove all burrs and dirt.</li>
                            <li>Check dry fit of pipe and fitting. Pipe should easily go 1/3 of the way into the fitting.</li>
                            <li>Clean pipe fitting with listed Primer.</li>
                            <li>Apply liberal coat of solvent cement to pipe to the depth of the socket.</li>
                            <li>Application of Solvent Cement Pipes and Fittings.</li>
                            <li>Push pipe fully into fitting using a 1/4 turning motion until pipe bottom</li>
                            <li>Hold pipe and fitting together for 30 seconds to prevent pipe push-out-longer at cold temperatures.</li>
                            <li>Allow 15 minutes for good handling strength and 2 hours cure time and temperatures above 60* F before hydro static pressure testing up to 180 psi longer cure times may be required at temperatures below 60* F or with pipe diameters over 1".</li>
                        </ol>
                        <h4 className='bg-blue mt-5' >SWR JOINT METHOD STEP</h4>
                        <ol>
                            <li>Clean The Both Inside Of The Bell And The Outside Of the Spigot</li>
                            <li>Completely Lubricant the Inside Surface of the Bell and the Gasket.</li>
                            <li>Do Not Apply Lubricant Into The Ring Groove.</li>
                            <li>Pipe Lubricant Can Be Applied From 10:F to 150: F.</li>
                        </ol>
                    </div>
                </div>
            </section>
            
            <ModelPopup imgModel={imgModel} proName={modelName} onClose={handleClose} />
            
        </>
    )
}

export default SingleProductPage