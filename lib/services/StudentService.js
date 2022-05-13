class StudentService{
     //consultar todos los estudiantes con todos sus campos.
     static seeAllStudentsS(students){
          return students;
     }
     //consultar los emails de todos los estudiantes que tengan certificación haveCertification.
     static filterEmailsByCertificationTrueS(students){
          const studentsWithCert = students.filter((student)=> student.haveCertification === true);
          const studentEmailWithCert = studentsWithCert.map((student) => student.email);
          return studentEmailWithCert;
     }
     //consultar todos los estudiantes que tengan credits mayor a 500.
     static filterStudentsByCreditsMoreThan500S(students){
          const studentsCreditsMore500 = students.filter((student)=>student.credits>500);
          return studentsCreditsMore500;
     }
}
module.exports =  StudentService;