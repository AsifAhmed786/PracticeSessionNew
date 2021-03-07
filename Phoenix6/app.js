// var a = "hello world"
// console.log(a)

// var name1 = prompt("Please enter your name")
// console.log(name1)

// for(var i = 0;i<4; i++){
//     console.log(i)
// }


// var count = 0;
// var status = true;
// while(status){
//     count++;
//     console.log(count)
//     if(count==4){
//         break
//     }

// }

// var prmp = +prompt("Please enter figure multiplied by 5")*5
// console.log(prmp)


function submit_data(){
    var email = document.getElementById("email")
    var pass = document.getElementById("pass")
    console.log(email.value,pass.value)
}

var readmore = ()=>{
    var contentp = document.getElementById("contentp")
    contentp.innerHTML = "My name is asif my father name is Ahmed"
}