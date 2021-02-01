var count = 0;
function checkTimer(){
    console.log(count)
    count++
}

checkTimer()
// console.log(count)
var interval = setInterval(checkTimer,1000)
setTimeout(function(){
clearInterval(interval)
console.log("clean")
},5000)