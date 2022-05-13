const StudentController = require("./controllers/StudentController");
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
    const studentInMission = StudentController.seeAllStudentsC();
    response.json(studentInMission);
});
