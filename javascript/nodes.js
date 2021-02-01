console.log(document.childNodes[1].childNodes)
for(var a=0;a<document.childNodes[1].childNodes.length;a++)
{
    console.log(`child node number ${a}: `,document.childNodes[1].childNodes[a])
}


function createElement1(){
    var main = document.getElementById("main")
    var p1 = document.createElement("p")
    var text = document.createTextNode("Text created")
    p1.appendChild(text)
    main.appendChild(p1)
    
}