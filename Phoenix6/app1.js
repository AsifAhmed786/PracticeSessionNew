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

// var command = document.getElementById("command")
// var commands = []

// function myfunction(event){
//     var x = event.keyCode
//     if(x==13){
//         commands.unshift(command.value)
//         console.log(commands)
//     }
// }

// document.getElementById("btn_cmd").addEventListener("click",function(){
//     commands.unshift(command.value)
//     console.log(commands)
// })


// document.getElementById("btn_list").addEventListener("click",function(){
//     console.log(commands)
//     console.log("started")
//     for(var i = 0; i < commands.length; i++){
//         console.log(i,commands[i])
//     }
// })

// document.getElementById("btn_sort").addEventListener("click",function(){
//     var array1 = [9,4,8,1,3,2]
//     console.log(array1)
//     console.log(array1.sort(function(ax){
//         if(ax>5){
//             return ax
//         }
//         else{
//             return null;
//         }
        
//     }))
// })


// function callMe(a,b){
//     console.log(a,b)
// }

// callMe(5,6)
// callMe(5)


// function callMe1(c,d=1){
//     console.log(c,d)
// }

// callMe1(4,6)


// function readMore()
// {
//     var read = document.getElementById("p1")
//     read.innerHTML = "My name is asif what is your name"
// }



// function chngImg(){
//     var img = document.getElementById("img1")
//     img.className += " hidden"
// }



// var p1 = document.getElementsByTagName("p")
// p1[1].style.color = "red"



var command = ()=>{
    // console.log(document.childNodes)
    var text = document.getElementById("text")
    var chat = document.getElementById("chat")
    // console.log(text.value)
    var textNode = document.createTextNode(text.value)
    var chatElement = document.createElement("p")
    chatElement.appendChild(textNode)
    chat.appendChild(chatElement)
    text.value = ""
}