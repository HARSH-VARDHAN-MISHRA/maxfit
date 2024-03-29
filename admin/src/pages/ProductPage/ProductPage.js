import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
    const [products,setproduct] = useState([]);

    const handleFetch = async()=>{
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-product');
            setproduct(res.data.data)
            // console.log(res.data.data)
            // console.log(products)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        handleFetch();
    },[])
    const hadndleDelete = async (id)=>{
        try {
            const res = await axios.delete(`http://localhost:7000/api/v1/delete-product/${id}`);
            toast.success("Product Deleted Successfully")
            console.log(res.data)
            handleFetch()
        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)
        }
    }
    console.log(products)
  return (
    <>
    <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Our Products</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li>Our Products</li>
                </ul>
            </div>
            <div className="btn1">
                <Link to={'/create-product'} >Create Product </Link>
            </div>
        </section>

        <section className="tables">
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Image</th>
                                <th scope="col">Table Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.reverse().map((item,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><img src={item.prodImage} alt="Category-image" /></td>
                                    <td><img src={item.prodTableImage} alt="Category-image" /></td>
                                    <td>{item.productName}</td>
                                    <td>{item.prodCategory}</td>
                                    <td className='upd-btns'>
                                        <Link to={`/edit-product/${item._id}`} className='upd-btns update'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>{hadndleDelete(item._id)}} className='upd-btns delete'><i className="fa-solid fa-trash-arrow-up"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductPage