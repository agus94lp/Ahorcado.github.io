let palabras =  ["html","computadora","informatica","desarrollador","tecnologia","programas","algoritmo","datos","sistemas","javascript"];

const btn_iniciar = document.getElementById("iniciar");
const btn_agregar = document.getElementById("agregar");

const pant_principal = document.getElementById("sec-principal");
const pant_juego = document.getElementById("sec-juego");
const pant_agregar = document.getElementById("sec-agregar");

const btn_nuevo = document.getElementById("nuevo");
const btn_desistir = document.getElementById("desistir");

const btn_guardar = document.getElementById("guardar");
const btn_cancelar = document.getElementById("cancelar");

const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");
const parrafo = document.getElementById("siletras");
const noletra = document.getElementById("noletras");


var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

let sii;
let acierto;
let error;
let palabra;
let letrasIncorrectas;
let tecla;
let cantLetras;
let comienza;
let usadas;
let esta;
let juego; // si gana o pierde se vuelve falso y no se pueden ingresar letras
function aleatorio(){
    const cant_palabras = palabras.length;
    const num = Math.floor(Math.random()* cant_palabras);
    return num;
}

function guiones(num){
    for (let i=0; i< num;i++){
        const span = document.createElement('span');
        parrafo.appendChild(span);
    }
}

function iniciar(){
    comienza=true;
    document.querySelector(".pri").classList.add("ocultar");
    document.querySelector(".jue").classList.remove("ocultar");
    resetear();
    const azar = aleatorio()
    palabra = palabras[azar];
    console.log(palabra);
    cantLetras = palabra.length;
    guiones(cantLetras);
    
}

function resetear(){
    parrafo.innerHTML = '';
    resultado.innerHTML = '';
    noletra.innerHTML = '';
    acierto = 0;
    error = 0;
    usadas= [];
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    pincel.resetTransform();
    letrasIncorrectas = [];
    
    if (comienza){
       jugando(); 
    }
    
}    


function jugando(){
window.addEventListener("keydown",(e)=>{
    const spans = document.querySelectorAll('span')
    sii = false;
    let tecla = e.key;
    console.log("la tecla que tocaste fue la: "+ tecla)
    juego=true;
    esta=false;
    for(var i = 0; i < usadas.length; i++){
        if(tecla == usadas[i]){
            esta=true;
            console.log("la "+ tecla + " ya la habias presionado");
        }
        console.log("la "+ tecla + " nunca habias presionado");
    }
        
    if (juego){
        if (esta === false){
            for(let j=0; j<palabra.length; j++){
                if (tecla == palabra[j]){
                    spans[j].innerHTML = tecla;
                    acierto++;
                    console.log("adivinaste: " + acierto + " letra.");
                    usadas.push(tecla);
                    console.log(usadas + " acertadas");
                    sii=true;
                }
            }

            if (sii === false){
                error++;
                mostrarerrores(tecla);
                dibujar(error);
                usadas.push(tecla);
                console.log(usadas);
                if (error == 10){
                    perdiste();
                    juego=false;
                }
            }
            if (acierto==palabra.length){
                resultado.innerHTML = "GANASTE";
                
                juego=false;
            }
        }
    }  
});
}



function mostrarerrores(tecla){
    letrasIncorrectas.push(tecla);
    noletra.innerHTML = letrasIncorrectas;
}

function dibujar(error){
    switch (error) {
        case 1:                    
        pincel.fillStyle='red';
        pincel.beginPath();
        pincel.moveTo(100, 50);
        pincel.lineTo(105, 50);
        pincel.lineTo(105, 305);
        pincel.lineTo(100, 305);
        pincel.fill();
            break;
        case 2:                    
        pincel.fillStyle='red';
        pincel.beginPath();
        pincel.moveTo(50, 300);
        pincel.lineTo(50, 305);
        pincel.lineTo(150, 305);
        pincel.lineTo(150, 300);
        pincel.fill();
            break;
        case 3:                    
        pincel.fillStyle='red';
        pincel.beginPath();
        pincel.moveTo(100, 50);
        pincel.lineTo(100, 45);
        pincel.lineTo(250, 45);
        pincel.lineTo(250, 50);
        pincel.fill();
            break;
        case 4:                    
        pincel.fillStyle='red';
        pincel.beginPath();
        pincel.moveTo(245, 45);
        pincel.lineTo(250, 45);
        pincel.lineTo(250, 90);
        pincel.lineTo(245, 90);
        pincel.fill();
            break;
        case 5:                    
        pincel.fillStyle = "red";
        pincel.beginPath();
        pincel.arc(247, 90, 25, 0, 2*3.14);
        pincel.fill();
            break;
        case 6:                    
        pincel.fillStyle='red';
        pincel.beginPath();
        pincel.moveTo(245, 115);
        pincel.lineTo(250, 115);
        pincel.lineTo(250, 250);
        pincel.lineTo(245, 250);
        pincel.fill();
            break;
        case 7:                    
        pincel.fillStyle='red';
        pincel.beginPath();
        pincel.moveTo(245, 150);
        pincel.lineTo(250, 150);
        pincel.lineTo(290, 205);
        pincel.lineTo(285, 205);
        pincel.fill();
            break;
        case 8:
            pincel.fillStyle='red';
            pincel.beginPath();
            pincel.moveTo(245, 150);
            pincel.lineTo(250, 150);
            pincel.lineTo(190, 200);
            pincel.lineTo(185, 200);
            pincel.fill();
            break;
        case 9:
            pincel.fillStyle='red';
                        pincel.beginPath();
                        pincel.moveTo(245, 250);
                        pincel.lineTo(250, 250);
                        pincel.lineTo(290, 305);
                        pincel.lineTo(285, 305);
                        pincel.fill();
            break;
        case 10:
            pincel.fillStyle='red';
                        pincel.beginPath();
                        pincel.moveTo(245, 250);
                        pincel.lineTo(250, 250);
                        pincel.lineTo(190, 305);
                        pincel.lineTo(185, 300);
                        pincel.fill();
            break;
            
        default:
            break;
    }
}

function perdiste(){
    resultado.innerHTML = `Perdista, la palabra era: ${palabra}`;
}


btn_iniciar.onclick = iniciar;

btn_nuevo.addEventListener("click", iniciare);
function iniciare(){
    
    parrafo.innerHTML = '';
    resultado.innerHTML = '';
    noletra.innerHTML = '';
    comienza = true;
    acierto = 0;
    error = 0;
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    pincel.resetTransform();
    letrasIncorrectas = [];
    usadas=[];
    sii = false;
    
    const azar = aleatorio()
    palabra = palabras[azar];
    console.log(palabra);
    cantLetras = palabra.length;
    guiones(cantLetras);
    document.querySelector(".jue").classList.remove("bra");
    document.querySelector(".jue").classList.remove("arg");
    
}

btn_desistir.addEventListener("click", desistir);
function desistir(){
    document.querySelector(".jue").classList.add("ocultar");
    document.querySelector(".pri").classList.remove("ocultar");
    resetear();
    location.reload();
    console.log(error);
}

btn_agregar.addEventListener("click", agregar);
function agregar(){
    document.querySelector(".pri").classList.add("ocultar");
    document.querySelector(".agr").classList.remove("ocultar");
    entrada.focus();
}

btn_cancelar.addEventListener("click", cancelar);
function cancelar(){
    document.querySelector(".agr").classList.add("ocultar");
    document.querySelector(".pri").classList.remove("ocultar");
}

btn_guardar.addEventListener("click", guardar);
function guardar(){
    var nueva = entrada.value;
    if (nueva.length < 8){
        alert("Debe ingresar como mínimo 8 caracteres");
    }
   
    else if (nueva.length >= 8)  {
        palabras.push(nueva);
        entrada.value= '';
        alert("La palabra fue agregada");
        document.querySelector(".agr").classList.add("ocultar");
        iniciar();
    }
}
/*
function traspaso(){
    if(valorArea()==""){
        alert("Esta vacio para encriptar");
    }
    else if (validar(valorArea())){
        alert("ingrese palabra sin tildes para encriptar");
    }
    else{
        ocultar();
        resultado.textContent = encriptar(valorArea());
    }
}
*/



