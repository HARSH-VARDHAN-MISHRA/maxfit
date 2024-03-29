import React from 'react'
import './AllProduct.css'
import { Link } from 'react-router-dom'

const AllProduct = () => {
    const products = [
        {
            "id": 1,
            "img": "https://i.ibb.co/Z69kgch/17.jpg",
            "productName": "MTA (BRASS THREADS)"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/bNB8gK5/3.jpg",
            "productName": "TEE"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/DkfN8FG/18.jpg",
            "productName": "ELBOW 90"
        },
        {
            "id": 4,
            "img": "https://i.ibb.co/Z69kgch/17.jpg",
            "productName": "END CAP"
        },
        {
            "id": 5,
            "img": "https://i.ibb.co/Z69kgch/17.jpg",
            "productName": "COUPLER"
        },
        {
            "id": 6,
            "img": "https://i.ibb.co/Z69kgch/17.jpg",
            "productName": "UNION"
        },
        {
            "id": 7,
            "img": "https://i.ibb.co/Z69kgch/17.jpg",
            "productName": "TANK ADAPTOR"
        },
        {
            "id": 8,
            "img": "https://i.ibb.co/Z69kgch/17.jpg",
            "productName": "BALL VALVE"
        },
        {
            "id": 9,
            "img": "https://i.ibb.co/Z69kgch/17.jpg",
            "productName": "REDUCER TEE"
        }
    ]
  return (
    <>
        <section className='my-5'>
            <div className="container">
                <div className="all-products">
                    {/* <div className="headLine">
                        <h3>UPVC PIPES AND FITTINGS (SIZE & PACKING DETAILS)</h3>
                        <span className='line'></span>
                    </div> */}
                    <div className="product-grid">
                        {products.map((pro,index)=>(
                            <Link className="single" to={'/product'} key={index}>
                                <img src={pro.img} alt="" />
                                <p className="pro-name">{pro.productName}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AllProduct