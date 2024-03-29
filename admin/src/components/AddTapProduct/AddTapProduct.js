import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTapProduct = () => {
    const [cate,setCate] = useState([])
  const [formData,setFormData] = useState({
    prodImage: '',
    productHeadpara: '',
    productBold: '',
    productBoldpara: '',
    productPrice: '',
    productCategory:''
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
    try {
      const response = await axios.post('http://localhost:7000/api/v1/create-tap-product',formData);
      console.log(response.data)
      toast.success("Product Added Successfully")
      window.location.href='/all-tap-products'
    } catch (error) {
      console.log('Error : ',error)
      toast.error(error.response.data.message)
    }
  }

  const getCategories = async()=>{
    try {
      const res = await axios.get('http://localhost:7000/api/v1/get-tap-category')
      // console.log(res.data.data)
      const cateRes = res.data.data;
      const mapcate = cateRes.map((item)=> item.categoryName)
      setCate(mapcate)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getCategories()
  },[])

  return (
    <>
        <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Add Tap Products</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li><a href="/all-tap-products">Our Tap Products / </a></li>
                    <li>Create Tap Product</li>
                </ul>
            </div>
            <div className="btn1">
                
            </div>
        </section>

        <section className="forms">
          <div className="container">
            <form className="row" onSubmit={handleSubmit}>
              
                <div className="col-md-8">
                  <label for="product-name" className="form-label">Heading Para</label>
                  <input type="text" className="form-control" value={formData.productHeadpara} name='productHeadpara' onChange={handleChange} id='product-name' placeholder="Product name" aria-label="Product name" />
                </div>
                <div className="col-md-4">
                  <label for="selectImage" className="form-label">Select Product Image</label>
                  <input required type="text" value={formData.prodImage} name='prodImage' onChange={handleChange} className="form-control" id='selectImage' placeholder="Product Image URL" aria-label="Product Image" />
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">Select Category</label>
                  <select id="inputState" onChange={handleChange} value={formData.productCategory} name='productCategory' className="form-select">
                    {cate.map((item)=>(
                      <option value={item} >{item}</option>
                    ))}
                  </select>
                </div>
                
                <div className="col-md-4">
                  <label for="selectImage" className="form-label">Bold heading</label>
                  <input  type="text" value={formData.productBold} name='productBold' onChange={handleChange} className="form-control" id='selectImage' placeholder="" aria-label="Product Image" />
                </div>
                <div className="col-md-4">
                  <label for="selectImage" className="form-label">Bold para</label>
                  <input required type="text" value={formData.productBoldpara} name='productBoldpara' onChange={handleChange} className="form-control" id='selectImage' placeholder="" aria-label="Product Image" />
                </div>
                <div className="col-md-4">
                  <label for="selectImage" className="form-label">Price</label>
                  <input required type="text" value={formData.productPrice} name='productPrice' onChange={handleChange} className="form-control" id='selectImage' placeholder="Product Price" aria-label="Product Image" />
                </div>
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

export default AddTapProduct