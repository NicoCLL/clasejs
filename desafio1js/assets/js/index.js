
/*  Guardar cantidades ingresadas en variables*/
/*  Calcular precio*/
/*  Traspasar color al circulo*/
 

let calculadora = document.getElementById("calculadora");
let cantidad = document.getElementById("cantidad");
let precio = document.getElementById("precio");
let color = document.getElementById("color");
let boton = document.getElementById("calctotal");

button.addEventListener("click", resultado);
function resultado(){
    calculadora.innerHTML = document.getElementById("precio").value * document.getElementById("cantidad").value;
    cant.innerHTML = document.getElementById("cantidad").value;
    circ.style.backgroundColor = document.getElementById("color").value;
}