var rect = require('./rectangle.js');// 'rectangle.js' is in the same folder so used './'

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rectangle) => { 

// calling the module and passing l,b,callback => getting return error or value 
        
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
};



// now like main function
solveRect(2,4);
solveRect(3,4);
solveRect(0,4);