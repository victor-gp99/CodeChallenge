const StudentController = require("./controllers/StudentController");
const Reader = require("./utils/Reader")

const students = Reader.readJsonFile("visualpartners.json");

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Welcome To Code Challenge !"});
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});

app.get("/v1/students", (request, response)=>{
    const studentInMission = StudentController.seeAllStudentsC(students);
    response.json(studentInMission);
});

app.get("/v1/emails", (request, response)=>{
    const studentInMission = StudentController.filterEmailsByCertificationTrueC(students);
    response.json(studentInMission);
});

app.get("/v1/credits", (request, response)=>{
    const studentInMission = StudentController.filterStudentsByCreditsMoreThan500C(students);
    response.json(studentInMission);
});
