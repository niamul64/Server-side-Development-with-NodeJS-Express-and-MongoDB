//npm init --yes  // initiat the node
//npm i express   // install express framework
// npm i -g nodemon
// install: NPM joi: npm i joi

const Joi = require('joi');// // validet the input
const express = require('express')
const app = express(); /// represents the application

app.use(express.json());


const courses =[
    { id:1, name: 'course1'},
    { id:2, name: 'course2'},
    { id:3, name: 'course3'},

];


function validateCurse(course){ // error handeling schema making function

    //otherwise validate the course
    const schema= { // building some schema to validate input
        name: Joi.string().min(3).required() // here, saying that: it is required and must be greater than 3
    };
    // now validate:
    return Joi.validate(course ,schema);
}


// now app object has some usefull methods
app.get('/',(req,res)=>{
    res.send('Hello World')
});


app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id=== parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given id was not found')
    else res.send(course)
});



// validet the input .. we use:  npm joi
// install: NPM joi: npm i joi@13.1.0
app.post('/api/courses', (req,res)=>{// here creat a ne course

    const schema= { // building some schema to validate input
        name: Joi.string().min(3).required() // here, saying that: it is required and must be greater than 3
    };
    // now validate:
    const result =Joi.validate(req.body ,schema);
    //print the result in console



    if (result.error ){ // input validation
        //400 bad request
        //res.status(400).send(result.error);
        res.status(400).send(result.error.details[0]);
        return; // don't run rest of the part
    }


    const course= {
        id: courses.length+1,
        name:req.body.name // jeson object comming, to work with this, we need express.json middleware

    };

    courses.push(courses); // saving to the database
    res.send(course); // to know the id 
});

    
app.put('/api/courses/:id',(req,res)=>{
    //see the course is exist or not to update(404)
    const course = courses.find(c=>c.id=== parseInt(req.params.id));
    if(!course){
         res.status(404).send('The course with the given id was not found');
         return;
    }
    // call function to validate result
    //const result= validateCurse(res.body);
    const {error}= validateCurse(req.body);// object distractor, only keeping the error property... instead of use result.error, use error



    if ( error ){ // input validation // "error"  object distructor variable
        //400 bad request
        //res.status(400).send(result.error);
        res.status(400).send(result.error.details[0]);
        return; // don't run rest of the part
    }
 
    // update the property
    course.name=req.body.name;
    res.send(course);

});

app.delete('/api/courses/:id',(req,res)=>{
    //see the course is exist or not to update(404)
    const course = courses.find(c=>c.id=== parseInt(req.params.id));
    
    if(!course) return res.status(404).send('The course with the given id was not found')

    //delete
    const index = courses.indexOf (course);
    courses.splice(index,1);

    res.send(course);

});



app.get('/api/posts/:id',(req,res)=>{
    res.send(req.params); //{year,month}
});

app.get('/api/post/:year/:month',(req,res)=>{
    res.send(req.query); //{year,month}
});

// to add query strin parameters:  
//normal url : http://localhost:5000/api/posts/1998/06
// query string : 























const port = process.env.PORT || 3000; // to dynamically declare the port number // in terminal: export PORT=5000 // to set 5000 as port

app.listen(port,()=> 
    console.log (`Listening on port ${port}..`));
//to start the server // node index.js

//node index.js
//nodemon index.js
