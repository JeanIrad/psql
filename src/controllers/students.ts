import {Request, Response, NextFunction} from 'express';
import asyncMiddleware from '../middlewares/asyncMiddleware';
import { pool
 } from '../db/db';
 import { getAllStudents, getStudentById,createStudent, checkEmailExists } from '../db/queries';

export default class StudentsController {
   static getStudents = asyncMiddleware(async (req: Request, res: Response) => {
         const {rows} =  await pool.query(getAllStudents)
       res.status(200).json(rows)
   })
    static createStudent = asyncMiddleware(async (req: Request, res: Response) => {
        const {name, email, age, dob} = req.body
        // check if email exists
       let {rows} = await pool.query(checkEmailExists, [email])
       if (rows.length > 0) 
           return res.status(400).json('Email already exists');
       
       const newStudent = await pool.query(createStudent, [name, email, age, dob])
        // const {rows} = await pool.query(createStudent, [name, email, age, dob])
         res.status(201).json(newStudent)
    } )
    static getStudentById = asyncMiddleware(async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const {rows} = await pool.query(getStudentById, [id])
        if (rows.length === 0) {
            return res.status(404).send('Student not found')
        }
         res.send(rows)
    } )
    static updateStudent = asyncMiddleware(async (req: Request, res: Response) => {
         res.send('Update a student')
    } ) 
    static deleteStudent = asyncMiddleware(async (req: Request, res: Response) => {
         res.send('Delete a student')
    } )
    static getStudentCourses = asyncMiddleware(async (req: Request, res: Response) => {
         res.send('Get student courses')
    } )
    static createStudentCourse = asyncMiddleware(async (req: Request, res: Response) => {
         res.send('Create a student course')
    } )

}