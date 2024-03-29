import React, { useEffect } from 'react'
import ProductCate from '../../components/productCategory/ProductCate'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import HelmentContext from '../../components/HelmentContext/HelmentContext'

const CategoryPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
        <HelmentContext
        title={`Our Products | MAXFIT Pipes & Fittings`}
        description={`Explore  at MAXFIT Pipes & Fittings. We offer a wide range of products including cPVC, uPVC, SWR Pipes/Fittings and more.`}
        keywords={`MAXFIT Pipes & Fittings, cPVC Pipes, uPVC Pipes, SWR Pipes, Brass Products, Submersible Column Pipes, Casing Pipes`}
      />
        <Breadcrumb title="Our Products" middle={{url:'',text:''}}  last='Our Products' />
        <ProductCate/>
    </>
  )
}

export default CategoryPage