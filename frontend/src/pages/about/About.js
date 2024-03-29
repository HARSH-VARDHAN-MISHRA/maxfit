import React, { useEffect } from 'react'
import AboutImg from '../../components/aboutImg/AboutImg'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import litexLogo from '../../litexLogo.png'

const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
        <Breadcrumb title="About Us" middle={{url:'',text:''}}  last='About Us' />
        <AboutImg/>
        <section>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="headLine">
                            <h3>OUR MISSION</h3>
                            <span className='line'></span>
                        </div>
                        <p className="text">To continuously invest in innovation and product development. To continuously better the systems and Processes.</p>
                        <p className='text'>To offer and enabling enviroment to employees for their professional growth. Technology has always been our strength in our products. The latest technologies to make sure our customers always get to have world class quality products with competative price.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="headLine">
                            <h3>OUR VISION</h3>
                            <span className='line'></span>
                        </div>
                        <p className='text'>To become a leading Player in Industries. To continuously improve competence through innovation and product development.</p>
                        <p className="text">We are committed to ensuring customer satisfaction by offering quality products through continuous upgradation of our technologies and systems with the involvement of our customers, vendors & employees.</p>
                    </div>
                </div>
            </div>
        </section>

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
    </>
  )
}

export default About