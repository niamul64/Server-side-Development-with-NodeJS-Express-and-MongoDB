### This is the continuation of the 2nd  exercise "node module"
<br>
 
### initially the index.js and the node module "rectangle.js" files are:

<img width="500" src= "pic/Capture8.PNG"/>
<img width="500" src= "pic/Capture7.PNG"/>

## Now, Using Callbacks and Error Handling:

1. Update  rectangle.js as shown below:
<img width="" src= "pic/Capture7.PNG"/>

## code index.js
<br>

var rect = require('./rectangle.js');// 'rectangle.js' is in the same folder so used './'<br>

function solveRect(l,b) {<br>
    console.log("Solving for rectangle with l = "<br>
                + l + " and b = " + b);<br>
    rect(l,b, (err,rectangle) => { <br>
<br>
// calling the module and passing l,b,callback => getting return error or value <br>
        <br>
        if (err) {<br>
	        console.log("ERROR: ", err.message);<br>
	    }<br>
        else {<br>
            console.log("The area of the rectangle of dimensions l = "<br>
                + l + " and b = " + b + " is " + rectangle.area());<br>
            console.log("The perimeter of the rectangle of dimensions l = "<br>
                + l + " and b = " + b + " is " + rectangle.perimeter());<br>
        }<br>
    });<br>
    console.log("This statement after the call to rect()");<br>
};<br>
<br>
<br>


// now like main function<br>
solveRect(2,4);<br>
solveRect(3,4);<br>
solveRect(0,4);<br>

<br>
<br>


<br>
## code rectangle.js<br><br>
module.exports = (x,y,callback) => { // receiving value x,y, callback(err,rectangle)<br>
   <br>
    if (x <= 0 || y <= 0)<br>
// if two sides of rectangle is 0 or less the send: callbanck(err=error,rectrangle= null) <br>
        setTimeout(() => <br>
            callback(new Error("Rectangle dimensions should be greater than zero: l = "<br>
                + x + ", and b = " + y), <br>
            null),<br>
            2000);<br>
    <br>
    else
    // else  send: callbanck(err=null,rectrangle= values)<br>
        setTimeout(() => <br>
            callback(null, {<br>
                perimeter: () => (2*(x+y)),<br>
                area:() => (x*y)<br>
            }), <br>
            2000);<br>
}<br>
<br>

