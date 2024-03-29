import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './TapProducts.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'


const TapProducts = () => {
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
        <Breadcrumb title="Our Products" middle={{url:'',text:''}}  last='Tap Products' />
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

export default TapProducts