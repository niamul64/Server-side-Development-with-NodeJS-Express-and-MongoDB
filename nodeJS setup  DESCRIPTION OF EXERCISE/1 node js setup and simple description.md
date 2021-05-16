<a href="https://www.coursera.org/learn/server-side-nodejs/lecture/dUnyG/exercise-video-understanding-node-modules">tutorial</a>

1. At first, from terminal, locate the folder(where we going to do work)<br> 
2. npm init
3. give package name
4. give description 
5. author: give a name
6. Now press enter (for rest of the items)
7. we will see package.json is created in that folder
8. now open package.json file, and add a line(script)<br> 

#### "start": "node index"
<img width="" src= "pic/Capture.PNG"/>
<img width="" src= "pic/Capture2.PNG"/>

9. create a file index.js in same directory where package.json located
<img width="" src= "pic/Capture3.PNG"/>

### now simple example:

<img width="500" src= "pic/Capture4.PNG"/>

var rect ={ // var means bariable, here creating a object variable <br>
    preimeter: (x,y) => (2*(x+y)),<br>
    area: (x,y) => (x*y)<br>
};<br><br>

function solveRect(l,b){ // creating function to recive 2 sides of rectangle<br>
    console.log("Solving for rectangle with l=" + l + "and b"+b); <br>
    // printing the value of l and b<br>
<br>
    if (l<=0 || b<=0){<br>
        console.log("rectangle dimensionsshould be greater than zero");<br>
        <br>
    }<br>
    else{<br>
        console.log("the area of the rectangle is "+ rect.area(l,b)); // calling the rect object<br>
        console.log("the preimeter of the rectangle is  "+ rect.preimeter(l,b));// calling the rect object<br>

    }<br>

}<br>

<br><br>

// now like main function<br>
solveRect(2,4);<br>
solveRect(3,4);<br>
solveRect(0,4);<br>
