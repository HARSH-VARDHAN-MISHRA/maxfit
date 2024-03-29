import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const Solutions = () => {
    const solutions = [
        {
            id:1,
            mediaImage:'https://www.dipsonpolymers.com/images/solutions/residential.jpg',
            solName:'Residentials'
        }
    ]
    
  return (
    <>
        <Breadcrumb title="Solutions" middle={{url:'',text:''}}  last='Solutions' />
        <section className='container mt-5'>
            <div className="row">
                <div className="headLine">
                    <h3>SOLUTIONS</h3>
                    <span className='line'></span>
                </div>
            </div>

            <div className="row">
                <div className="cateGrid">
                    {solutions && solutions.map((item,index)=>(
                        <div className="singleMedia" key={index}>
                            <img src={item.mediaImage} alt="media-image" decoding='async' loading='lazy' />
                            <div className="eventName">{item.solName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Solutions