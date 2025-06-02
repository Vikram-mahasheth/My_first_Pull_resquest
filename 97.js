// this in a regular function,regular function means function is not a port of object
function calculatesum(){
    console.log(this);
}
calculatesum();//logs the global object (window in browsers)