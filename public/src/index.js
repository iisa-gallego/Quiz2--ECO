
import {getFirebaseConfig} from "./firebase-config";

//Inicializar el firebase
const firebaseAppConfig = getFirebaseConfig();




/*function add(){
    let object= {
        id:0,
    }
    
   console.Log(database.ref('main').push().set(object)) 

}

let button= document.getElementById('matricular')
button.addEventListener('click', add())*/
//DECLARACIONES
const estudiante = document.getElementById('estudiante');
const codigo = document.getElementById('codigo');
const curso = document.getElementById('curso');
const matricularBtn =document.getElementById('matricular')

//FUNCIONES
registrar = ()=> {
    let es=estudiante.value;
    let o=codigo.value;
    let c=curso.value;

}

let objetoUsuario = {
    nombre: n,
    codigo: o,
    curso: c
}

let json = JSON.stringify(objetoUsuario);

console.log(objetoUsuario);
console.log(json);

database.ref('estudiantes/alfa').set(objetoUsuario);

matricularBtn.addEventlistener('click', matricular)

    