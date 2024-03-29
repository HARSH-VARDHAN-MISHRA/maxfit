import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
    const {id} = useParams()
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
    const handleFetch = async()=>{
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-product');
            // console.log(res.data.data)
            const product = res.data.data
            const fillterProduct = product.filter((item)=> item._id === id)
            // console.log(fillterProduct)

            setFormData({
                productName: fillterProduct[0].productName,
                prodCategory: fillterProduct[0].prodCategory,
                prodImage: fillterProduct[0].prodImage,
                prodTableImage: fillterProduct[0].prodTableImage
                // prodDesc: fillterProduct[0].prodDesc,
                // prodDesc1: fillterProduct[0].prodDesc1
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const submitResponse = await axios.post(`http://localhost:7000/api/v1/update-product/${id}`,formData);
            // console.log(submitResponse)
            toast.success("Product Updated Successfully")
            window.location.href='/all-products'
        } catch (error) {
            toast.error(error.response.data.msg)
            console.log(error)
        }
    }

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
      
      useEffect(()=>{
        getCategories()
        handleFetch()
    },[id])
    

  return (
    <>
        <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Edit Products</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li><a href="/all-products">Our Products / </a></li>
                    <li>Edit Product</li>
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
                    <option value={formData.prodCategory} >{formData.prodCategory}</option>
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
                  <input type="submit" className='btn btn-success'  value="Save Product Changes" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default EditProduct