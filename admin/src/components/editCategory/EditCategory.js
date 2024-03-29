import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCategory = () => {
    const {id} = useParams()
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
    const handleFetch = async()=>{
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-category');
            // console.log(res.data.data)
            const product = res.data.data
            const fillterProduct = product.filter((item)=> item._id === id)
            // console.log(fillterProduct)
            setData({
                categoryName: fillterProduct[0].categoryName,
                categoryImage: fillterProduct[0].categoryImage,
                description: fillterProduct[0].description,
                description_second:fillterProduct[0].description_second
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const submitResponse = await axios.post(`http://localhost:7000/api/v1/update-category/${id}`,formData);
            // console.log(submitResponse)
            toast.success("Category Updated Successfully")
            window.location.href='/all-category'
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.msg)
        }
    }
    
  useEffect(()=>{
      handleFetch()
  },[id])
  return (
    <>
        <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Edit Category</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li><a href="/all-category">Our Category / </a></li>
                    <li>Edit category</li>
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
                  <input type="submit" className='btn btn-success'  value="Save Category Changes" />
                </div>
              
            </form>
          </div>
        </section>
    </>
  )
}

export default EditCategory