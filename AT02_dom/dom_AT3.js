function minhaFuncao(){
    var elemento1 = document.getElementById("p1");
    var elemento2 = document.getElementById("p2");

    document.getElementById("p3").innerHTML = elemento1.innerHTML.toUpperCase();
    document.getElementById("p4").innerHTML = elemento2.innerHTML.toUpperCase();

}
function cor(){
    var elemento = document.getElementById("titulo");
    elemento.style.color = 'red'
    
}
function cor2(){
    var elemento = document.getElementById("titulo");
    elemento.style.color = 'black'
    
}
