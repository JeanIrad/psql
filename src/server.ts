import express from 'express'
import morgan from 'morgan'
import studentsRoute from './routes/students'


const app  =  express()
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/api/v1/students', studentsRoute)
app.listen(3000, () => {    
    console.log('Server is running on http://localhost:3000')
}   )
console.log(process.env)