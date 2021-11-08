import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push, get } from "firebase/database";
import { getFirebaseConfig } from "./firebase-config";
import { renderTarjeta } from "./renderTarjeta";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);


const estudiante = document.getElementById('estudiante');
const codigo = document.getElementById('codigo');
const curso = document.getElementById('curso');
const matricularBtn = document.getElementById('matricular');

const listaNBono = document.getElementById("bono__1");
const listaBPlata = document.getElementById("bono__2");
const listaBOro = document.getElementById("bono__3");


//------------------------------
function registroEstud(student) {
    //Obtener base de datos
    const db = getDatabase();
    const newStudRef = push(ref(db, 'Estudiante'));
    const dbRef = ref(db, 'Estudiante');
    get(dbRef).then((snapshot) => {
        const data = snapshot.val();
        console.log('se registra en studreg');
        student["id"] = newStudRef.key
        set(newStudRef, student);
    });
}

function getEstudiante() {
    const db = getDatabase();
    const dbRef = ref(db, 'Estudiante');

    onValue(dbRef, (snapshot) => {
        const datosEstud = snapshot.val();
        currentList(datosEstud);
    });
}

getEstudiante();

function currentList(info) {
    if (info) {
        listaNBono.innerHTML = "";
        listaBPlata.innerHTML = "";
        listaBOro.innerHTML = "";
        Object.keys(info).forEach((i, index) => {
            const tarjeta = new renderTarjeta(info[i]);
            if (info[i].participaciones <= 5) {
                listaNBono.appendChild(tarjeta.render());
            } else if (info[i].participaciones > 5 && info[i].participaciones <= 10) {
                listaBPlata.appendChild(tarjeta.render());
            } else if (info[i].participaciones > 10) {
                listaBOro.appendChild(tarjeta.render());
            }
        });

    } else {
        listaNBono.innerHTML = "No hay estudiantes registrados";
        listaBPlata.innerHTML = "No hay estudiantes registrados";
        listaBOro.innerHTML = "No hay estudiantes registrados";
    }
}




const almacenarData = (j, event) => {
    if (estudiante.value != "" && codigo.value != "" && curso.value != "") {
        const estud = {
            nombre: estudiante.value,
            codigo: codigo.value,
            curso: curso.value,
            participaciones: 0
        }
        curso.value = '';
        codigo.value = '';
        estudiante.value = '';
        registroEstud(estud);
    } else {
        alert("Falta información");
    }
}

matricularBtn.addEventListener('click', almacenarData);


