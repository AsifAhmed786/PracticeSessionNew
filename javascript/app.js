var array = []
function click1(){
    var name = document.getElementById("name")
    if(name.value==""){
        alert("please enter any value")
    }
    else{
        array.unshift(name.value)
        console.log(array,"asif")
    }
    
}


var array2 = ["Asif","Ahmed","Imran","Jamal"]
console.log(array2.slice(0,2))
console.log(array2[9])

for(var lop = 0;lop<5;lop++){
    console.log(lop)
}



var abc = prompt("Please enter your name")
// console.log(`this is ${abc}`)
switch(abc){
    case "Asif":
        console.log(`Case 1 this is ${abc}`)
        break;
    case "Imran":
        console.log(`Case 2 this is ${abc}`)
    default:
        console.log("this is default")
}   


var btn = document.getElementById("event")
btn.addEventListener("click",()=>{
    console.log("event listener")
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
})



function readMore(){
    // alert("readmore")
    var p = document.getElementById("para")
    p.innerHTML = "Asif Ahmed is a bad boy and your are he badliest boy every i seen"
}