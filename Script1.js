

document.writeln("--------------Imprimir arreglo----------------"+ "<br>");

const Drogas = ["Cocaína", "Dexametasona", "Anfetaminas"];
document.writeln(Drogas  + "<br>"  + "<br>");


document.writeln("--------------ciclo for----------------"+ "<br>");

for (let i = 0; i < 67; i++) {
    document.writeln(i + "<br>") ;
  }

  document.writeln("--------------ciclo while----------------"+ "<br>");
  let j = 0;
while (j < 10) {
    document.writeln("a chiquilla"+ "<br>");
  j++;

}
  document.writeln("------------------- if ---------------------"+ "<br>");
  
 

x = 2;
y = 18;
if (x > y) {
  document.writeln("x es mayor que y"+ "<br>");

}else {
  document.writeln("y es mayor que x"+ "<br>");
}
  
document.writeln("------------------- uso de variables locales ---------------------"+ "<br>");
  
myFunction();

function myFunction() {
  var a = 2;
  var b = 5;
 var c = a*b;
 document.writeln(c);
}

//captura de datos

function capturaDatos(){
  var nombredelvato=document.getElementById("nomest").value;
  var edadelvato=document.getElementById("edadelvato").value;
  if(nombredelvato == ""){
    alert("El nombre es obligatorio");
    document.getElementById("nomest").focus();
  }else if(edadelvato == ""){
    alert("El numero es obligatorio");
    document.getElementById("edadelvato").focus();
  } else{
    console.log(nombredelvato + " " + edadelvato);
    document.getElementById("nomest").value="";
    document.getElementById("edadelvato").value="";
    document.getElementById("nomest").focus();
  }
  

}
  
