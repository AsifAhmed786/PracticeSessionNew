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