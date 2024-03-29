import React, { useEffect } from 'react'
import './ProductCate.css'

// import agriculturePvc from './images/agriculture-pvc.jpg'
// import brassMetal from './images/brass-metal-products.jpg'
// import casingPipes from './images/casing-pipes.jpg'
// import cpvc from './images/cpvc.jpg'
// import submersibleColumn from './images/submersible-column-pipes.jpg'
// import swrPipes from './images/swr-pipes.jpg'
// import upvc from './images/upvc.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const ProductCate = () => {
    // const cateDetails = [
    //     {
    //         id:1,
    //         img: cpvc,
    //         name: "cPVC Pipes / Fittings"
    //     },
    //     {
    //         id:2,
    //         img: upvc,
    //         name: "uPVC Pipes / Fittings"
    //     },
    //     {
    //         id:3,
    //         img: swrPipes,
    //         name: "SWR Pipes / Fittings"
    //     },
    //     {
    //         id:4,
    //         img: agriculturePvc,
    //         name: "Agriculture (Rigid) PVC Pipes & Fittings"
    //     },
    //     {
    //         id:5,
    //         img: brassMetal,
    //         name: "Brass & Metal Products"
    //     },
    //     {
    //         id:6,
    //         img: submersibleColumn,
    //         name: "Submersible Column Pipes"
    //     },
    //     {
    //         id:7,
    //         img: casingPipes,
    //         name: "Casing Pipes"
    //     },
    // ]

    const [cateDetails,setCateDetails] = useState([]);
    const handleFetch = async()=>{
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-category')
            setCateDetails(res.data.data)
            console.log(res.data.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        handleFetch()
    },[])
  return (
    <>
        <section className="our-categories">
            <div className="container">
                <div className="flex-4">
                    {cateDetails && cateDetails.map((item,index)=>(
                        <Link to={`/pipes/${item.categoryName}`} className="single" key={index}>
                            <img src={item.categoryImage} alt="category-image" />
                            <p className="name">{item.categoryName}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductCate