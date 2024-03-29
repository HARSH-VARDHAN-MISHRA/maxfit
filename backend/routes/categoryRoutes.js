const express = require('express');
const { createCategory, getAllCategory, createProduct, getAllProduct, deleteProducts, deleteCategory, updateCategory, updateProduct, createTapCategory, getAllTapCategory, deleteTapCategory, updateTapCategory, createTapProduct, getAllTapProduct, deleteTapProduct, updateTapProduct, createMediaCenter, getAllMediaCenter, deleteMediaCenter, updateMediaCenter } = require('../controlers/webcontroler');

const route = express.Router()


// For Pipes Products & category
route.post('/create-category',createCategory)
route.get('/get-category',getAllCategory)
route.delete('/delete-category/:id',deleteCategory)
route.post('/update-category/:id',updateCategory)

route.post('/create-product',createProduct)
route.get('/get-product',getAllProduct)
route.delete('/delete-product/:id',deleteProducts)
route.post('/update-product/:id',updateProduct)

// For Taps Products & category
route.post('/create-tap-category',createTapCategory)
route.get('/get-tap-category',getAllTapCategory)
route.delete('/delete-tap-category/:id',deleteTapCategory)
route.post('/update-tap-category/:id',updateTapCategory)

route.post('/create-tap-product',createTapProduct)
route.get('/get-tap-product',getAllTapProduct)
route.delete('/delete-tap-product/:id',deleteTapProduct)
route.post('/update-tap-product/:id',updateTapProduct)

// Media Center
route.post('/create-media-center',createMediaCenter)
route.get('/get-media-center',getAllMediaCenter)
route.delete('/delete-media-center/:id',deleteMediaCenter)
route.post('/update-media-center/:id',updateMediaCenter)

module.exports = route;