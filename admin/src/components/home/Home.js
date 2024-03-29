import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Header from '../header/Header'
import { Route,Routes } from 'react-router-dom'

import './Home.css'
import CategoryPage from '../../pages/CategoryPage/CategoryPage'
import ProductPage from '../../pages/ProductPage/ProductPage'
import AddProduct from '../AddProduct/AddProduct'
import AddCategory from '../AddCategory/AddCategory'
import EditCategory from '../editCategory/EditCategory'
import EditProduct from '../editProduct/EditProduct'
import TapCategory from '../../pages/TapCategory/TapCategory'
import AddTapCategory from '../AddTapCategory/AddTapCategory'
import EditTapCategory from '../editTapCategory/EditTapCategory'
import TapProducts from '../../pages/TapProducts/TapProducts'
import AddTapProduct from '../AddTapProduct/AddTapProduct'
import EditTapProduct from '../EditTapProduct/EditTapProduct'
import MediaCenter from '../../pages/MediaCenter/MediaCenter'
import AddMediaCenter from '../AddMediaCenter/AddMediaCenter'
import EditMediaCenter from '../EditMediaCenter/EditMediaCenter'

const Home = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='rightSidebar'>
            <Routes>
                <Route path={"/"} element={<Dashboard/>}/>
                <Route path={"/create-category"} element={<AddCategory/>}/>
                <Route path={"/all-category"} element={<CategoryPage/>}/>
                <Route path={"/create-product"} element={<AddProduct/>}/>
                <Route path={"/all-products"} element={<ProductPage/>}/>
                <Route path={"/edit-category/:id"} element={<EditCategory/>}/>
                <Route path={"/edit-product/:id"} element={<EditProduct/>}/>

                <Route path={"/all-tap-category"} element={<TapCategory/>}/>
                <Route path={"/create-tap-category"} element={<AddTapCategory/>}/>
                <Route path={"/update-tap-category/:id"} element={<EditTapCategory/>}/>
                <Route path={"/all-tap-products"} element={<TapProducts/>}/>
                <Route path={"/create-tap-product"} element={<AddTapProduct/>}/>
                <Route path={"/update-tap-product/:id"} element={<EditTapProduct/>}/>

                <Route path={"/media-center"} element={<MediaCenter/>}/>
                <Route path={"/upload-media-center"} element={<AddMediaCenter/>}/>
                <Route path={"/update-media-center/:id"} element={<EditMediaCenter/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Home