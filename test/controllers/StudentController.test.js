const Reader = require("../../lib/utils/Reader")
const StudentController = require("../../lib/controllers/StudentController")

describe("Test for StudentController class",()=>{
    
    test ("For seeAllStudentsC function",()=>{  
        const students = Reader.readJsonFile("visualpartners.json");
        const studentsInNode = StudentController.seeAllStudentsC(students);
        expect(studentsInNode).toStrictEqual(students);
     }) 

     test ("For filterEmailsByCertificationTrueC function",()=>{

        const students = [{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
              "Visual Thinking Intermedio",
              "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
          },
          {
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "enrollments": [
              "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": false
          }]
        const studentsInNode = StudentController.filterEmailsByCertificationTrueC(students);
        expect(studentsInNode).toStrictEqual(["Todd@visualpartnership.xyz"]);
     })  
 })
 