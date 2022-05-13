const Student = require("./../services/StudentService");
class StudentController{
   static seeAllStudentsC(students){
       const result = Student.seeAllStudentsS(students);
       return result;
   }
   static filterEmailsByCertificationTrueC(students){
    const result = Student.filterEmailsByCertificationTrueS(students);
    return result;  
   }
   static filterStudentsByCreditsMoreThan500C(students){
    const result = Student.filterStudentsByCreditsMoreThan500S(students);
    return result;  
   }
}

module.exports = StudentController;