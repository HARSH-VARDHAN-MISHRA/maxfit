const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true 
    },
    categoryImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    description_second: {
        type: String
    }
});

const categoryDetail = mongoose.model('categoryDetail', categorySchema);

module.exports = categoryDetail;
