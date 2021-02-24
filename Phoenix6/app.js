var arr = ["hello"];
document.getElementById("btn_signin").addEventListener("click",function(){
    // arr.push(document.getElementById("email")   
    arr.unshift(document.getElementById("email").value)
    // console.log(arr)
})

document.getElementById("btn_signup").addEventListener("click",function(){
    alert(arr)
})

