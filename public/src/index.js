const database = firebase.database();



function add(){
    let object= {
        id:0,
    }
    
   console.Log(database.ref('main').push().set(object)) 

}

let button= document.getElementById('matricular')
button.addEventListener('click', add())
    