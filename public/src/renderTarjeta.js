import { getDatabase, ref, set, push } from 'firebase/database';

export class renderTarjeta {
    constructor(renderTarjeta){
        this.renderTarjeta = renderTarjeta;   
    }

    render(){

        let nombre = document.createElement("p");
        nombre.className = "nombreEstudiante"
        nombre.innerHTML = this.renderTarjeta.nombre;

        let codigo = document.createElement("p");
        codigo.className = "codigoEstudiante";
        codigo.innerHTML = this.renderTarjeta.codigo;

        let curso = document.createElement("p");
        curso.className = "cursoEstudiante"
        curso.innerHTML = this.renderTarjeta.curso;

        let component = document.createElement("div");
        component.className = "tarjEstudiante";
        
        let particip = document.createElement("p");
        particip.className = "participEstudiandte";
        particip.innerHTML = this.renderTarjeta.participaciones;
        
        let participaBtn = document.createElement("button");
        participaBtn.className = "agregarBtn";
        participaBtn.innerHTML = "+";

        let borrarBtn = document.createElement("button");
        borrarBtn.className = "borrarBtn";
        borrarBtn.innerHTML = "x";
        
    
        participaBtn.addEventListener("click", (j, ev)=>{
            const db = getDatabase();
            const studRef = ref(db,'Estudiante/'+this.renderTarjeta.id+'/participaciones');
            set(studRef,this.renderTarjeta.participaciones+1);
        });


        borrarBtn.addEventListener("click", (j, ev)=>{
            const db = getDatabase();
            const studRef = ref(db,'Estudiante/'+this.renderTarjeta.id);
            set(studRef, null);
        });
       
        component.appendChild(nombre);
        component.appendChild(codigo);
        component.appendChild(curso);
        component.appendChild(particip);
        component.appendChild(participaBtn);
        component.appendChild(borrarBtn);
        return component;
    }
}