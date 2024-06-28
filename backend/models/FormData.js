const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    email: { type: String },
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    primaryContact: { type: Number },
    alternateContact: { type: Number },
    emailId: { type: String },
    dob: { type: Date },
    age: { type: Number },
    gender: { type: String },
    maritalStatus: { type: String },
    nationality: { type: String },
    bloodGroup: { type: String },
    currentAddress: { type: String },
    permanentAddress: { type: String },
    currentLocation: { type: String },
    preferredLocation: { type: String }
});


module.exports = mongoose.model('FormData', formDataSchema);
