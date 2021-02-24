// function clickMe(){
//     let message = "Please enter your name"
//     var name = prompt(message)
//     if(name==""){
//         console.log("please enter something")
//     }
//     else{
//         console.log(name)
//     }
    
// }

var command = document.getElementById("command")
var commands = []

function myfunction(event){
    var x = event.keyCode
    if(x==13){
        commands.unshift(command.value)
        console.log(commands)
    }
}

document.getElementById("btn_cmd").addEventListener("click",function(){
    commands.unshift(command.value)
    console.log(commands)
})


document.getElementById("btn_list").addEventListener("click",function(){
    console.log(commands)
    console.log("started")
    for(var i = 0; i < commands.length; i++){
        console.log(i,commands[i])
    }
})