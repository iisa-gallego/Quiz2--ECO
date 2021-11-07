// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3bImKywF3B_GWH2MqKcS3fZVN-6qleWc",
    authDomain: "quiz2-eco.firebaseapp.com",
    databaseURL: "https://quiz2-eco-default-rtdb.firebaseio.com",
    projectId: "quiz2-eco",
    storageBucket: "quiz2-eco.appspot.com",
    messagingSenderId: "180138756947",
    appId: "1:180138756947:web:d8dff6b7a660ba7c7b6fa6",
    measurementId: "G-0MFN2FSL6Q"
  };

export function getFirebaseConfig(){
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else{
        return firebaseConfig;
    }
  }