const Reader = require("../../lib/utils/Reader")
const StudentController = require("../../lib/controllers/StudentController")

const students = Reader.readJsonFile("visualpartners.json");

describe("Test for StudentController class",()=>{
    test ("For seeAllStudentsC function",()=>{
        const studentsInNode = StudentController.seeAllStudentsC();
        expect(studentsInNode).toStrictEqual(students);
     })  
 })
 