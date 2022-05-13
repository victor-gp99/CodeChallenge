const Reader = require("./lib/utils/Reader");
const StudentService =  require("./lib/services/StudentService");

const students = Reader.readJsonFile("visualpartners.json");
// console.log(students);

const prueba = StudentService.seeAllStudentsS(students);
// console.log(prueba.length);

const prueba2 = StudentService.filterEmailsByCertificationTrueS(students);
// console.log(prueba2);