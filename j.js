let x = document.getElementById("input1");
let y ;
function calc(n){
     x.value+=n; 
}
function opr(){
    try{
        x.value = eval(x.value);
    }
    catch(error){
        x.value="error";
    }
 
}
function cler(){
    x.value="";
}






