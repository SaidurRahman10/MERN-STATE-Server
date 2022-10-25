const express =require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/courses.json')

app.get('/', (req, res)=>{
    res.send('MARN STATE  Server is Running')
});
app.get('/course', (req, res)=>{
    res.send(course)
});
app.get('/course/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    const courses = course.find(c => c.id === id);
    res.send(courses)
    
})


app.listen(port)