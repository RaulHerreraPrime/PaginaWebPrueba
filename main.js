//Configuracion de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1XEv1sIkhIK6pPDYTJakldCHEQPcO3cM",
    authDomain: "ejemploiot-44b6e.firebaseapp.com",
    databaseURL: "https://ejemploiot-44b6e-default-rtdb.firebaseio.com",
    projectId: "ejemploiot-44b6e",
    storageBucket: "ejemploiot-44b6e.appspot.com",
    messagingSenderId: "111857260309",
    appId: "1:111857260309:web:544998d9a45aed89b93b1c",
    measurementId: "G-T5DNXTL6C3"
  };

// Inicialización de Firebase
firebase.initializeApp(firebaseConfig);

//Variables
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var images = ["/img/derecha.png","/img/izquierda.png"];

//conexion con Firebase
var firebaseSENSORA =firebase.database().ref("ejemploiot-44b6e-default-rtdb/SENSORES/SENSORA");
var firebaseSENSORB =firebase.database().ref("ejemploiot-44b6e-default-rtdb/SENSORES/SENSORB");

firebaseSENSORA.on("value",function(snapshot){
    var SENSORA = snapshot.val();
    var direccion;
    if(SENSORA=="DERECHA"){
        img1.src="/img/derecha.png";
    }
    else{
        img1.src="/img/izquierda.png";
    }
});

firebaseSENSORB.on("value",function(snapshot){
    var SENSORB = snapshot.val();
    if(SENSORB=="DERECHA"){
        img2.src="/img/derecha.png";
    }
    else{
        img2.src="/img/izquierda.png";
    }
});