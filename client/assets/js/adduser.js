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
    window.alert(newuserEmail + " " + "added successfully");
  
  }


//   function deleteUser(){
//     var user = firebase.auth().currentUser;
//     user.delete().then(function() {
//         window.alert("Deleted Successfully");
//     }).catch(function(error) {
//         window.alert("Error : " + errorMessage);
//     });
//   }