module.exports = (x,y,callback) => { // receiving value x,y, callback(err,rectangle)
   
    if (x <= 0 || y <= 0)
// if two sides of rectangle is 0 or less the send: callbanck(err=error,rectrangle= null) 
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),
            2000);
    else
    // else  send: callbanck(err=null,rectrangle= values)
        setTimeout(() => 
            callback(null, {
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }), 
            2000);
}
