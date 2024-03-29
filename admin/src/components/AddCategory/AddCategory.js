import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
  const [formData,setData] = useState({
    categoryName: '',
    categoryImage: '',
    description: '',
    description_second:''
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
      const response = await axios.post('http://localhost:7000/api/v1/create-category',formData);
      console.log(response.data)
      toast.success("Category Added Successfully !!")
      window.location.href='/all-category'
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
                <h2>Add Category</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li><a href="/all-category">Our Category / </a></li>
                    <li>Create category</li>
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
                  <input required type="text" onChange={handleChange} name='categoryName' value={formData.categoryName} className="form-control" id='product-name' placeholder="Category name" aria-label="Product name" />
                </div>
                <div className="col-md-4">
                  <label for="selectImage" className="form-label">Category Image</label>
                  <input required type="text" value={formData.categoryImage} name='categoryImage' onChange={handleChange} className="form-control" id='selectImage' placeholder="Image URL" aria-label="Product Image" />
                </div>
                <div className="col-md-12">
                  <label for="Desciption" className="form-label">Description</label>
                  <textarea required className="form-control" name='description' onChange={handleChange} value={formData.description}  id="Desciption"></textarea>
                </div>
                <div className="col-md-12">
                  <label for="Desciption2" className="form-label">Description 2</label>
                  <textarea className="form-control" onChange={handleChange} name='description_second' value={formData.description_second} id="Desciption2"></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <input type="reset" className='btn btn-warning text-white'  /> &nbsp;
                  <input type="submit" className='btn btn-success'  value="Add Category" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default AddCategory