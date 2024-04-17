const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    timestamp: Date,
    value: Number
});

module.exports = mongoose.model('Data', dataSchema);
