console.log("hiii")


// const callback = (n) => {
//     return n ** 2
//   }
//   ​


//   function cube(callback, n) {
//     return callback(n) * n
//   }
//   ​
//   console.log(cube(callback, 3))


function hrcall(cb){
    console.log("hr called")
    setTimeout(()=>{
        console.log("hrcalled");
        cb();
    },2000)
    
}
function hrdirector()
{
    console.log("director")
    }
    hrcall(hrdirector);

