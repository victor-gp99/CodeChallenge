const StudentService =  require("../../lib/services/StudentService")
const Reader = require("../../lib/utils/Reader")

const students = Reader.readJsonFile("visualpartners.json");

describe("Test for StudentService class",()=>{
    test ("For seeAllStudents function",()=>{

        const studentsInNode = StudentService.seeAllStudentsS(students);
        expect(studentsInNode.length).toBe(51);    
        
     })  
 })
 