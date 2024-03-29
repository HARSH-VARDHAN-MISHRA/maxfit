
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import ProductCate from './components/productCategory/ProductCate';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductPage from './pages/ProductPage/ProductPage';
import ContactPage from './pages/contactPage/ContactPage';
import AllProducts from './pages/AllProducts/AllProducts';
import TapProducts from './pages/tapProducts/TapProducts';
import SingleTapCategory from './pages/singleTapCategory/SingleTapCategory';
import MediaCenter from './pages/mediaCenter/MediaCenter';
import SingleCatPipe from './components/productCategory/SingleCatPipe';
import SingleProductPage from './components/SingleProductPage/SingleProductPage';
import Solutions from './pages/Solutions/Solutions';
import DistributorForm from './pages/DistributorForm/DistributorForm';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about-us' element={<About/>} />
          <Route path='/our-products' element={<CategoryPage/>} />
          <Route path='/pipes/:name' element={<SingleProductPage/>} />
          <Route path='/contact-us' element={<ContactPage/>} />
          <Route path='/all-products' element={<AllProducts/>} />
          <Route path='/tap-products' element={<TapProducts/>} />
          <Route path='/tap-products/:categoryName' element={<SingleTapCategory/>} />
          <Route path='/media-center' element={<MediaCenter/>} />

          <Route path='/solution' element={<Solutions/>} />
          <Route path='/distributor-form' element={<DistributorForm/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
