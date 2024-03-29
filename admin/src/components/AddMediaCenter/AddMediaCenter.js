import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddMediaCenter = () => {
    const [formData,setData] = useState({
        mediaImage: '',
        mediaName: ''
      })
    
      const handleChange=(event,index)=>{
        const {name,value} = event.target;
        setData(prevData =>({
          ...prevData,
          [name]:value
        }))
      }
    
      const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:7000/api/v1/create-media-center',formData);
          console.log(response.data)
          toast.success("Media Added Successfully")
          window.location.href='/media-center'
        } catch (error) {
          console.log('Error : ',error)
          toast.error(error.response.data.message)
        }
      }
  return (
    <>
        <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Upload Media Center</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li><a href="/media-center">Media Center / </a></li>
                    <li>Upload Media Center</li>
                </ul>
            </div>
            <div className="btn1">
                
            </div>
        </section>

        <section className="forms">
          <div className="container">
            <form className="row" onSubmit={handleSubmit}>
              
                <div className="col-md-4">
                  <label for="product-name" className="form-label">Category Name</label>
                  <input required type="text" onChange={handleChange} name='mediaName' value={formData.mediaName} className="form-control" id='product-name' placeholder="Media Center name" aria-label="Product name" />
                </div>
                <div className="col-md-4">
                  <label for="selectImage" className="form-label">Category Image</label>
                  <input required type="text" value={formData.mediaImage} name='mediaImage' onChange={handleChange} className="form-control" id='selectImage' placeholder="Image URL" aria-label="Product Image" />
                </div>
                <div className="col-md-12 text-center">
                  <input type="reset" className='btn btn-warning text-white'  /> &nbsp;
                  <input type="submit" className='btn btn-success'  value="Add Media" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default AddMediaCenter