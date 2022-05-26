const Employee = require("../models/Employee");

const HTTP = {
    USER_ERROR: 400,
    OK: 201,
    NOT_FOUND: 404
}

exports.getAllEmployees = async (req,res) =>{
    try {
        res.json(await Employee.find());
    } catch (error) {
        res.status(HTTP.USER_ERROR).json({
            msg: error
        });
    }
}


exports.saveEmployees = async (req,res) =>{
    const employee = new Employee({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        salary: req.body.salary,
    })

    try {
        res.json(await employee.save());
    } catch (error) {
        res.status(HTTP.USER_ERROR).json({
            msg: error
        });
    }
}

exports.getEmployeesById = async (req,res) =>{
    try {
        const singleEmployee = await Employee.findById(req.params.id);
        res.json(singleEmployee);
    } catch (error) {
        res.status(HTTP.NOT_FOUND).json({
            msg: "employee doesn't exist"
        });
    }
}


exports.deleteEmployee = async (req,res)=>{
    try {
        const deletedEmployee = await Employee.deleteOne({
            _id: req.params.id
        });
        res.json(deletedEmployee);
    } catch (error) {
        res.status(HTTP.NOT_FOUND).json({
            msg: "employee doesn't exist"
        });
    }
}

exports.updateEmployee = async (req,res)=>{
    try {
        await Employee.updateOne({
            _id: req.params.id
        }, {
            $set: {
                name: req.body.name,
                dateOfBirth: req.body.dateOfBirth,
                gender: req.body.gender,
                salary: req.body.salary,
            }
        });
        const updatedEmployee = await Employee.findById(req.params.id);
        res.json(updatedEmployee);
    } catch (error) {
        res.status(HTTP.NOT_FOUND).json({
            msg: "employee doesn't exist"
        });
    }
}