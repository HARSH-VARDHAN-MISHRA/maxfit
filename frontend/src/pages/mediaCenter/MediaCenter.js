import React, { useEffect, useState } from 'react'
import './MediaCenter.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import axios from 'axios'

const MediaCenter = () => {
    const [mediaFeilds,setmediaFeilds] = useState();
    
    const fetchMedia = async()=>{
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-media-center')
            setmediaFeilds(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchMedia();
    },[])
  return (
    <>
        <Breadcrumb title="Media Center" middle={{url:'',text:''}}  last='Media Center' />
        <section className='container mt-5'>
            <div className="row">
                <div className="headLine">
                    <h3>MEDIA CENTER</h3>
                    <span className='line'></span>
                </div>
            </div>

            <div className="row">
                <div className="cateGrid">
                    {mediaFeilds && mediaFeilds.map((item,index)=>(
                        <div className="singleMedia" key={index}>
                            <img src={item.mediaImage} alt="media-image" decoding='async' loading='lazy' />
                            <div className="eventName">{item.mediaName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default MediaCenter