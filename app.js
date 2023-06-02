var main = document.getElementById("main");
var textforInput = document.getElementById("input1");

function removePara(b){
    b.parentNode.remove()
}

function addElem(){
    var p = document.createElement("P");
    var text = document.createTextNode(textforInput.value);
    p.appendChild(text);
    main.appendChild(p);
    console.log(p)
    var b = document.createElement("BUTTON");
    b.classList.add("removebtns")
    var buttonLabel = document.createTextNode("Remove");
    b.appendChild(buttonLabel) ;
    b.setAttribute("onclick", "removePara(this)")
    p.appendChild(b);
    console.log(b);
}