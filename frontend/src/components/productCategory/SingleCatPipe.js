import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const SingleCatPipe = () => {

    const { name } = useParams()
    console.log(name)
    // get-tap-product
    const [litexCate, setlitexCate] = useState([]);
    const handleFetch = async () => {
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-product')
            console.log(res.data.data)
            const fillterProducts = res.data.data.filter((item) => item.prodCategory === name)
            console.log(fillterProducts)
            setlitexCate(fillterProducts)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        handleFetch()
    }, [])
    return (
        <>
            <Breadcrumb title="Category Name" middle={{ url: '/tap-products', text: 'Tap Categories' }} last='Category Name' />

            <section className="container tabProducts">
                <div className="row">
                    <div className="cateGrid">
                        {litexCate && litexCate.map((item, index) => {
                            return (

                            <div key={index} className="singleProduct">
                                <img src={item.prodImage} alt="product-image" />
                                <div className="contents">
                                    <div className="heading">{item.productHeadpara || "  "}</div>
                                    <div className="flex-d">
                                        <div className="names">
                                            <strong>{item.productBold}</strong>
                                            <p>{item.productBoldpara}</p>
                                        </div>
                                        <div className="price">₹{item.productPrice}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleCatPipe