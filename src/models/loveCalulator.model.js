const mongoose = require('mongoose');

const LoveFormSchema = new mongoose.Schema({
    maleName: String,
    femaleName: String,
    lat: String,
    long: String,
    postDataDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('LoveForm', LoveFormSchema);