const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const cors = require('cors')

app.use(cors())

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Employee API",
            description: "Employee API Information",
            contact: {
                name: "Amazing Developer"
            },
        }
    },
    apis: ['./routes/EmployeeRoutes.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/employees", require("./routes/EmployeeRoutes"));
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => {
        console.log("connected to db");
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})