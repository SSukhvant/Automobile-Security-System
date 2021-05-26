// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZ8_T4PPwFqN8UiyJXbCAeBsjOkoabHXo",
    authDomain: "amss-d3ef7.firebaseapp.com",
    databaseURL: "https://amss-d3ef7-default-rtdb.firebaseio.com",
    projectId: "amss-d3ef7",
    storageBucket: "amss-d3ef7.appspot.com",
    messagingSenderId: "53069957819",
    appId: "1:53069957819:web:354d6913061e3a286c379e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = email_id;
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    
  
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  
  
  // const uemail = document.getElementByClassName("user_paras").value;
  // document.getElementById("user_paras").innerHTML = uemail;