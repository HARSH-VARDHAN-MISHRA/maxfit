import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MediaCenter = () => {
    const [mediaCenter,setmediaCenter] = useState([]);

    const handleFetch = async()=>{
        try {
            const res = await axios.get('http://localhost:7000/api/v1/get-media-center');
            setmediaCenter(res.data.data)
            // console.log(res.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        handleFetch();
    },[])
    const hadndleDelete = async (id)=>{
        try {
            const res = await axios.delete(`http://localhost:7000/api/v1/delete-media-center/${id}`);
            console.log(res.data)
            toast.success("Media Deleted")
            handleFetch()
        } catch (error) {
            console.error(error)
            toast.error(error.response.data.message)
        }
    }
  return (
    <>
        <ToastContainer />
        <section className="breadCmb">
            <div>
                <h2>Media Center</h2>
                <ul>
                    <li><a href="/">Home / </a></li>
                    <li>Media Center</li>
                </ul>
            </div>
            <div className="btn1">
                <Link to={'/upload-media-center'} >Upload Media Center </Link>
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
                                <th scope="col">Name</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mediaCenter && mediaCenter.reverse().map((item,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><img src={item.mediaImage} alt="Category-image" /></td>
                                    <td>{item.mediaName}</td>
                                    <td className='upd-btns'>
                                        <Link to={`/update-media-center/${item._id}`} className='upd-btns update'><i className="fa-solid fa-pen-to-square"></i></Link>
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

export default MediaCenter