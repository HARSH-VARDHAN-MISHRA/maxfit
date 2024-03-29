const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    productName : {
        type:String,
        required:true
    },
    prodCategory:{
        type:String,
        required:true
    },
    prodImage:{
        type:String,
        required:true
    },
    prodTableImage:{
        type:String,
        required:true
    }
    // prodDesc:{
    //     type:String,
    //     required:true
    // },
    // prodDesc1:{
    //     type:String,
    //     required:true
    // },
})

const productDetail = mongoose.model('productDetail',productsSchema);

module.exports = productDetail;