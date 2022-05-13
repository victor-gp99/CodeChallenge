const Student = require("./../services/StudentService");
const Reader = require("../Utils/Reader");

const students = Reader.readJsonFile("visualpartners.json");

class StudentController{
    //consultar todos los estudiantes con todos sus campos.
    static seeAllStudents(){}
    //consultar los emails de todos los estudiantes que tengan certificación haveCertification.
    static filterEmailsByCertificationTrue(){}
    //consultar todos los estudiantes que tengan credits mayor a 500.
    static filterStudentsByCreditsMoreThan500(){}

}

module.exports = StudentController;