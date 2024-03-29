import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTapProduct = () => {
    const {id} = useParams()
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
    const handleFetch = async()=>{
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-tap-product');
            console.log(res.data.data)
            const product = res.data.data
            const fillterProduct = product.filter((item)=> item._id === id)
            console.log(fillterProduct)

            setFormData({
                prodImage: fillterProduct[0].prodImage,
                productHeadpara: fillterProduct[0].productHeadpara,
                productBold: fillterProduct[0].productBold,
                productBoldpara: fillterProduct[0].productBoldpara,
                productPrice: fillterProduct[0].productPrice,
                productCategory: fillterProduct[0].productCategory
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const submitResponse = await axios.post(`http://localhost:7000/api/v1/update-tap-product/${id}`,formData);
            // console.log(submitResponse)
            toast.success("Product Updated Successfully")
            window.location.href='/all-tap-products'
        } catch (error) {
            toast.error(error.response.data.msg)
            console.log(error)
        }
    }

    const getCategories = async()=>{
        try {
          const res = await axios.get('http://localhost:7000/api/v1/get-tap-category')
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
        <section className="breadCmb">
            <div>
                <h2>Edit Tap Products</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li><a href="/all-tap-products">Tap Products / </a></li>
                    <li>Edit Tap Product</li>
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
                    <option value={formData.productCategory} >{formData.productCategory}</option>
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
                  <input type="submit" className='btn btn-success'  value="Save Product Changes" />
                </div>
              
            </form>
          </div>
        </section>
        
    </>
  )
}

export default EditTapProduct