export const getAllStudents = 'SELECT * FROM students'
export const getStudentById = 'SELECT * FROM students WHERE id = $1' 
export const createStudent = 'INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)'
export const checkEmailExists = 'SELECT * FROM students s WHERE s.email = $1'
export const deleteStudent = `DELETE FROM students s WHERE s.id = $1`
export const updateStudent = `UPDATE students  SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5`