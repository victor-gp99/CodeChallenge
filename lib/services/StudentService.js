class StudentService{
     //consultar todos los estudiantes con todos sus campos.
     static seeAllStudentsS(students){
          return students;
     }
     //consultar los emails de todos los estudiantes que tengan certificación haveCertification.
     static filterEmailsByCertificationTrueS(){}
     //consultar todos los estudiantes que tengan credits mayor a 500.
     static filterStudentsByCreditsMoreThan500S(){}
}
module.exports =  StudentService;