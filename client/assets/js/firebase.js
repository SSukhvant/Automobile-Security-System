var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCZ8_T4PPwFqN8UiyJXbCAeBsjOkoabHXo",
    authDomain: "amss-d3ef7.firebaseapp.com",
    databaseURL: "https://amss-d3ef7-default-rtdb.firebaseio.com",
    projectId: "amss-d3ef7",
    storageBucket: "amss-d3ef7.appspot.com",
    messagingSenderId: "53069957819",
    appId: "1:53069957819:web:c208a5e0fee786116c379e"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}