import React, { useEffect } from 'react'
import ContactForm from '../../components/contactForm/ContactForm'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import HelmentContext from '../../components/HelmentContext/HelmentContext'

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
    
        <HelmentContext
            title="Contact Us | MAXFIT Pipes & Fittings"
            description="Get in touch with MAXFIT Pipes & Fittings for all your inquiries regarding cPVC, uPVC, SWR Pipes/Fittings."
            keywords="Contact MAXFIT, MAXFIT Pipes & Fittings Contact, cPVC Pipes contact, uPVC Pipes contact, SWR Pipes contact"
        />
        <Breadcrumb title="Contact Us" middle={{url:'',text:''}}  last='Contact Us' />
        <ContactForm/>
        <section>
            <div className="container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56007.73435155417!2d77.24312864863279!3d28.67518310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb25f953546b%3A0xfdaa7e0a90d40b12!2sIndia%20Sales%20Corporation!5e0!3m2!1sen!2sin!4v1711013695201!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </>
  )
}

export default ContactPage