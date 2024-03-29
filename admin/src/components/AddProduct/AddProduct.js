import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [cate,setCate] = useState([])
  const [formData,setFormData] = useState({
    productName: '',
    prodCategory: '',
    prodImage: '',
    prodTableImage: ''
    // prodDesc: '',
    // prodDesc1: ''
  })
  const handleChange=(event,index)=>{
    const {name,value} = event.target;
    setFormData(prevData =>({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:7000/api/v1/create-product',formData);
      // console.log(response.data)
      toast.success("Product Added Successfully !!")
      window.location.href='/all-products'
    } catch (error) {
      console.log('Error : ',error)
      toast.error(error.response.data.message)
    }
  }

  
  useEffect(()=>{
    const getCategories = async()=>{
      try {
        const res = await axios.get('http://localhost:7000/api/v1/get-category')
        // console.log(res.data.data)
        const cateRes = res.data.data;
        const mapcate = cateRes.map((item)=> item.categoryName)
        // console.log(mapcate)
        setCate(mapcate)
        // console.log("cate",cate)
        
      } catch (error) {
        console.log(error)
      }
    }
    getCategories()
  },[])

  return (
    <>
        <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Add Products</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li><a href="/all-products">Our Products / </a></li>
                    <li>Create Product</li>
                </ul>
            </div>
            <div className="btn1">
                
            </div>
        </section>

        <section className="forms">
          <div className="container">
            <form className="row" onSubmit={handleSubmit}>
              
                <div className="col-md-4">
                  <label for="product-name" className="form-label">Product Name</label>
                  <input type="text" className="form-control" value={formData.productName} name='productName' onChange={handleChange} id='product-name' placeholder="Product name" aria-label="Product name" />
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">Select Category</label>
                  <select id="inputState" onChange={handleChange} value={formData.prodCategory} name='prodCategory' className="form-select">
                    <option >Select Your Category </option>
                    {cate.map((item)=>(
                      <option value={item} >{item}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="selectImage" className="form-label">Select Product Image</label>
                  <input required type="text" value={formData.prodImage} name='prodImage' onChange={handleChange} className="form-control" id='selectImage' placeholder="Product Image URL" aria-label="Product Image" />
                </div>
                <div className="col-md-4">
                  <label for="selectImage1" className="form-label">Select Table Image</label>
                  <input required type="text" value={formData.prodTableImage} name='prodTableImage' onChange={handleChange} className="form-control" id='selectImage1' placeholder="table Image URL" aria-label="Table Image" />
                </div>
                {/* <div className="col-md-12">
                  <label for="Desciption" className="form-label">Description</label>
                  <textarea className="form-control" value={formData.prodDesc} name='prodDesc' onChange={handleChange} id="Desciption"></textarea>
                </div>
                <div className="col-md-12">
                  <label for="Desciption2" className="form-label">Description</label>
                  <textarea className="form-control" value={formData.prodDesc1} name='prodDesc1' onChange={handleChange} id="Desciption2"></textarea>
                </div> */}
                <div className="col-md-12 text-center">
                  <input type="reset" className='btn btn-warning text-white'  /> &nbsp;
                  <input type="submit" className='btn btn-success'  value="Add Product" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default AddProduct