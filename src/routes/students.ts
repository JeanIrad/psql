import { Router } from "express";
import StudentsController from "../controllers/students";

const studentsRoute = Router()
studentsRoute.get('/',StudentsController.getStudents)
studentsRoute.post('/',StudentsController.createStudent)
studentsRoute.get('/:id',StudentsController.getStudentById)
studentsRoute.put('/:id',StudentsController.updateStudent)
studentsRoute.delete('/:id',StudentsController.deleteStudent)
studentsRoute.get('/:id/courses',StudentsController.getStudentCourses) 
studentsRoute.post('/:id/courses',StudentsController.createStudentCourse)

export default studentsRoute