const mongoose = require("mongoose");


const EmployeeSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    gender : {
        type : String,
        required: true
    },
    salary : {
        type : Number,
        required: true
    }
})

module.exports = mongoose.model("Employee",EmployeeSchema);