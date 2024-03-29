const mongoose = require('mongoose');

const mediaCenterSchema = mongoose.Schema({
    mediaImage:{
        type:String,
        required:true
    },
    mediaName:{
        type:String,
        required:true
    }
});

const mediaDetail = mongoose.model('mediaDetail',mediaCenterSchema);
module.exports = mediaDetail;
