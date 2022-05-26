const express = require("express");
const employeeController = require("../controllers/EmployeeController")
const router = express.Router();

// GET ALL EMPLOYEE
/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Retrieve a list of employees
 *     responses:
 *       200:
 *         description: A list of employees.
*/
router.get("/",employeeController.getAllEmployees);

//SAVE EMPLOYEE
/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a employee.
 *     responses:
 *       201:
 *          description: new employee
 */
router.post("/",employeeController.saveEmployees);

//GET EMPLOYEE BY ID
/**
 * @swagger
 * /employees/:id:
 *   get:
 *     summary: Retrieve an employees by id
 *     responses:
 *       200:
 *         description: The employee with the specified id
 */
router.get("/:id", employeeController.getEmployeesById);

//DELETE EMPLOYEE
/**
 * @swagger
 * /employees/:id:
 *   delete:
 *     summary: Delete an employees by id
 *     responses:
 *       200:
 *         description:
 */
router.delete("/:id",employeeController.deleteEmployee);


//UPDATE EMPLOYEE
/**
 * @swagger
 * /employees/:id:
 *   put:
 *     summary: Update an employee with id
 *     responses:
 *       200:
 *         description: The updated employee data
 */
router.put("/:id",employeeController.updateEmployee);

module.exports = router;