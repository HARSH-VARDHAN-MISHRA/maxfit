import React, { useEffect } from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import SingleProductPage from '../../components/SingleProductPage/SingleProductPage'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const {categoryName} = useParams()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
        <SingleProductPage  />
    </>
  )
}

export default ProductPage