const Student = require("./../services/StudentService");
const Reader = require("../utils/Reader");

const students = Reader.readJsonFile("visualpartners.json");

class StudentController{
   static seeAllStudentsC(){
       const result = Student.seeAllStudentsS(students);
       return result;
   }
}

module.exports = StudentController;