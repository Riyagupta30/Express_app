const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    roll_no: Number,
    name: String,
    year: Number,
    subjects: [String]
});

module.exports = mongoose.model('Student', StudentSchema);