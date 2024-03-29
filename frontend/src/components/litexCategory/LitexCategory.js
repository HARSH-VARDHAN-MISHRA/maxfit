import React, { useEffect, useState } from 'react'
import litexLogo from '../../litexLogo.png'
import './LitexCategory.css'
import Subhead from '../subhead/Subhead'
import { Link } from 'react-router-dom'
import axios from 'axios'
const LitexCategory = () => {

    const [litexCate,setlitexCate] = useState([]);
    const handleFetch = async()=>{
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-tap-category')
            setlitexCate(res.data.data)
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
        <section className="litexContent my-5">
            <div className="container">
                <div className="row content">
                    <div className="col-12 ">
                        <img src={litexLogo} className='mb-2 litexLogo' alt="litex-logo" />
                    </div>
                    <div className="col-md-8">
                        <h3>TAKE YOUR BATHROOM TO THE NEXT LEVEL</h3>
                        <p>With changing time of sanitary requirements in india, LITEX entered bathroom spaces completely by launching exclusive range of faucet & bathroom accessories. Our products are made with finest of materials with best standard of manufacturing processes.</p>
                        <p>A definitive experience of contemporary design, LITEX asserts itself with refined angles and strong architectural lines with focus on design artistry and innovation to match the individual teste and décor of bathroom. These designs are suitable for modern living spaces.</p>
                        <p>LITEX is focussed on completely redefining the bathroom experience of our consumers to utmost satisfaction, in years to come.</p>
                        <p>LITEX Faucets & Accessories are made in india in its stats-of-art plant having large manufacturing capacity. LITEX products are constructed with solid metal which provides great strength, durability & higher quality of finish.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://i.ibb.co/rQKv0Ph/image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <Subhead title="Bathroom Taps" para="Elevating Expectations, Redefining Standards: Discover Excellence in Every Product"/>

        <section className="litexCatey">
            <div className="container">
                <div className="row">
                    <div className="cateGrid">
                        {litexCate && litexCate.map((item,index)=>(
                            <Link to={`/tap-products/${item.categoryName}`} className="singleCate" key={index}>
                                <img src={item.categoryImage} alt="category-images"  decoding='async' loading='lazy'/>
                                <h4>{item.categoryName}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default LitexCategory