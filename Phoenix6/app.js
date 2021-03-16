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


// function submit_data(){
//     var email = document.getElementById("email")
//     var pass = document.getElementById("pass")
//     console.log(email.value,pass.value)
// }

// var readmore = ()=>{
//     var contentp = document.getElementById("contentp")
//     contentp.innerHTML = "My name is asif my father name is Ahmed"
// }



// Example 5
// let name1 = "Ahmed"
// name1 = "Asif"
// console.log(name1)

// let fname = "Ahmed"

// console.log(`My name is ${name1} and my father name is ${fname}`)

// var student = {
//     name2:"Asif",
//     fname2:"Ahmed",
//     age:40
// }


// let {name2,fname2,age} = student
// console.log(name2,fname2,age)


// var arr = ["karachi","peshawar","quetta"]


// var [city1,city2,city3] = arr;
// console.log(city1,city2,city3)


// var abc = 6;
// console.log(abc == 5 ? "Yes" : "No")



// let std1 = [{name:"Asif",fname:"Ahmed",age:40},{name:"imran",fname:"jamal",age:45},{name:"Hanif",fname:"Turk",age:46}]
// let filter = std1.filter((a)=>a.age>40)
// console.log(filter)



// Example 6
// var student = {
//     name:"Asif",
//     fname:"Ahmed",
//     age:40
// }
// console.log(student)


// function Car(make,model,price){
//     this.make = make;
//     this.model = model;
//     this.price = price
// }

// var car1 = new Car("Suzuki","Swift",2000000)
// console.log(car1)


// class Human{
//     constructor(gender,age,name1){
//         this.gender = gender;
//         this.age = age;
//         this.name1 = name1
//     }
// }


// var human1 = new Human("Male",50,"Aslam")
// console.log(human1)



// let sendData = ()=>{
//     var std1 = {
//         name1:document.getElementById("name1").value,
//         fname:document.getElementById("fname").value
//     }
//     // console.log(std1)
//     let key1 = firebase.database().ref('users/').push().key
//     // console.log(key1)
//     firebase.database().ref('users/').child(key1).set(std1)
//     .then(function(){
//         // console.log("data transmitted succcessfully")
//     })
//     .catch(function(e){
//         // console.log(e.message())
//     })    
// }




//     firebase.database().ref('users/').on("value",function(data){
//         for(var keys in data.val()){
//             firebase.database().ref('users/'+keys).on("value",function(data1){
//                 console.log(data1.val().name1)
//             })
            
//         }
//     })
    


// let remove = ()=>{
//     var remove = document.getElementById("remove").value
//     firebase.database().ref("users/"+remove).remove()    
// }


// let edit = ()=>{
//     console.log("edit")
//     var edit = document.getElementById("edit").value
//     console.log(edit)
//     firebase.database().ref("users/"+edit).set({
//         name1:"champion",
//         fname:"champions father"
//     })
// }

// var firebase1 = firebase.database()


// let sendData = ()=>{
//     console.log("send data started")
//     var name1 = document.getElementById("name1")
//     var fname = document.getElementById("fname")
//     var key1 = firebase1.ref("users/").push().key
//     firebase1.ref("users/").child(key1).set({
//         key:key1,
//         name1:name1.value,
//         fname:fname.value
//     })
//     console.log(key1)
// }

// firebase1.ref("users/").on("value",function(data){
//     for(var keys in data.val()){
//         firebase1.ref("users/"+keys).on("value",function(data){
//             console.log(data.val().name1)
//         })
       
//     }
// })

// let remove = ()=>{
//     var remove = document.getElementById("remove")
//     firebase1.ref("users/"+remove.value).remove()
// }

// let edit = ()=>{
//     var edit = document.getElementById("edit")
//     firebase1.ref("users/"+edit.value).set({
//         keys:edit.value,
//         name1:"champion",
//         fname:"father of the champion"
//     })
// }

// let firedb = firebase.database()

// let sendData = ()=>{
//     var name1 = document.getElementById("name1")
//     var fname = document.getElementById("fname")
//     var key1 = firedb.ref("users/").push().key
//     firedb.ref("users/").child(key1).set({
//         key:key1,
//         name1:name1.value,
//         fname:fname.value
//     })
//     .then(()=>{
//         console.log("data successfully sent")
//     })
// }


// let getData = ()=>{
//     firedb.ref("users/").once("value",(data)=>{
//         for(var key in data.val()){
//             firedb.ref("users/"+key).once("value",(data)=>{
//                 console.log(`name is ${data.val().name1} father name is ${data.val().fname} key is ${data.val().key}`)
//             })
//         }
//     })
// }


// let remove = ()=>{
//     var remove = document.getElementById("remove")
//     console.log(remove.value)
//     firedb.ref("users/"+remove.value).remove()
//     // console.log("data removed successfully")
// }



var firebasedb = firebase.database()


let sendData = ()=>{
    var key = firebasedb.ref("users/").push().key;
    var name1 = document.getElementById("name1")
    var fname = document.getElementById("fname")
    firebasedb.ref("users/").child(key).set({
        key:key,
        name1:name1.value,
        fname:fname.value
    })
    .then(function(){
        console.log("databse added")
    })
    .catch(function(err){
        console.log(err.message)
    })
}




let getData = ()=>{
    firebasedb.ref("users/").once("value",function(data){
        for(var keys in data.val())
        {
            firebasedb.ref("users/"+keys).once("value",function(data){
                console.log(data.val().name1)
            })
        }
    })
}

let remove = ()=>{
    var remove = document.getElementById("remove")
    firebasedb.ref("users/"+remove.value).remove()
    console.log("data removed")
}

