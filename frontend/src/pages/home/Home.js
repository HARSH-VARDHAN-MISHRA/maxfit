import React, { useEffect } from 'react'
import Herocara from '../../components/heroCara/Herocara'
import Hero from '../../components/Hero/Hero'
import Subhead from '../../components/subhead/Subhead'
import AboutImg from '../../components/aboutImg/AboutImg'
import ProductCate from '../../components/productCategory/ProductCate'
import ContactForm from '../../components/contactForm/ContactForm'
import HelmentContext from '../../components/HelmentContext/HelmentContext'
import CategoryPage from '../CategoryPage/CategoryPage'
import AllProduct from '../../components/allProduct/AllProduct'
import { Link } from 'react-router-dom'
import LitexCategory from '../../components/litexCategory/LitexCategory'



const Home = () => {
    useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
    }, [])
  return (
    <>
         <HelmentContext
            title="MAXFIT Pipes & Fittings"
            description="Welcome to MAXFIT Pipes & Fittings - Your source for cPVC, uPVC, SWR Pipes/Fittings and more."
            keywords="MAXFIT Pipes & Fittings, cPVC Pipes, uPVC Pipes, SWR Pipes, Brass Products, Submersible Column Pipes, Casing Pipes"
          />
        <Herocara/>
        <Subhead title="about us" para="Crafting Quality, Building Trust: Our Story of Dedication and Excellence Since 2018" />
        <AboutImg/>
        <Subhead title="Our Products" para="Elevating Expectations, Redefining Standards: Discover Excellence in Every Product"/>
        <ProductCate/>

        <LitexCategory/>
        
        <Subhead title="Connect With Us" para="If you have any questions or inquiries, don't hesitate to reach out to our dedicated team."/>
        <ContactForm/>
    </>
  )
}

export default Home