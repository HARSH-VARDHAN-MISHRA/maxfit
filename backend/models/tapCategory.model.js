const mongoose = require('mongoose');

const TapcategorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryImage: {
        type: String,
        required: true
    }
});

const TapcategoryDetail = mongoose.model('TapcategoryDetail', TapcategorySchema);

module.exports = TapcategoryDetail;