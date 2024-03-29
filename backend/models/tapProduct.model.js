const mongoose = require('mongoose');

const TapProductsSchema = mongoose.Schema({
    prodImage:{
        type:String,
        required:true
    },
    productHeadpara:{
        type:String
    },
    productBold:{
        type:String
    },
    productBoldpara:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productCategory:{
        type:String,
        required:true
    }
})

const TapProductDetail = mongoose.model('TapProductDetail',TapProductsSchema);

module.exports = TapProductDetail;