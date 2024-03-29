import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import AllProduct from '../../components/allProduct/AllProduct'

const AllProducts = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
        <Breadcrumb title="Our Products" middle={{url:'/our-products',text:'Categories'}}  last='Our Products' />
        <AllProduct/>
    </>
  )
}

export default AllProducts