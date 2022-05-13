const StudentService =  require("../../lib/services/StudentService")
const Reader = require("../../lib/utils/Reader")

const students = Reader.readJsonFile("visualpartners.json");

describe("Test for StudentServiceS class",()=>{
    test ("For seeAllStudents function",()=>{

        const studentsInNode = StudentService.seeAllStudentsS(students);
        expect(studentsInNode.length).toBe(51);    
        
     })  

     test ("For filterEmailsByCertificationTrueS function",()=>{

        const studentsInNode = StudentService.filterEmailsByCertificationTrueS(students);
        expect(studentsInNode.length).toBe(29);    
        
     })  

     test ("For filterStudentsByCreditsMoreThan500S function",()=>{

        const studentsInNode = StudentService.filterStudentsByCreditsMoreThan500S(students);
        expect(studentsInNode.length).toBe(27);    
        
     })  
 })
 