// FirebaseUI config.
// var uiConfig = {
//     signInSuccessUrl: 'adduser.html',
//     signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
            //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            // firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    // ],
    // Terms of service url.
//     tosUrl: 'adduser.html'
//   };
  
  // Initialize the FirebaseUI Widget using Firebase.
//   var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
//   ui.start('#firebaseui-auth-container', uiConfig);
//   window.alert("Success");

firebase.auth().createUserWithEmailAndPassword(newuserEmail, newuserPass)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

  function newUser(){

    var newuserEmail = document.getElementById("new_user_email").value;
    var newuserPass = document.getElementById("new_user_password").value;
  
    
  
  
    firebase.auth().createUserWithEmailAndPassword(newuserEmail, newuserPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
    });
  
  }


//   function deleteUser(){
//     var user = firebase.auth().currentUser;
//     user.delete().then(function() {
//         window.alert("Deleted Successfully");
//     }).catch(function(error) {
//         window.alert("Error : " + errorMessage);
//     });
//   }