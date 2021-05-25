// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDeLmYKU51PCuofgXHILzampMF--b5A2t8",
  authDomain: "capstone-46b17.firebaseapp.com",
  projectId: "capstone-46b17",
  storageBucket: "capstone-46b17.appspot.com",
  messagingSenderId: "873481861209",
  appId: "1:873481861209:web:52c28fc9d392d45a2f1948",
  measurementId: "G-L1C0BEJB2M"
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