// function lock(){
//     var locked = document.getElementById("lock")

//     if(locked.checked== false){
//         document.getElementById("lock").value="0"
//         console.log("locked unlocked unlocked");
//         return document.getElementById("unlock").innerHTML="Unlocked"
//     }
//     else {
//         document.getElementById("lock").value="1"
//         console.log("unlocked");
//         return document.getElementById("unlock").innerHTML="Locked"
//     }  
// }

// function engine(){
//     const engine = document.getElementById("engine")

//     if( engine.checked==false){
//         console.log("locked");
//         return document.getElementById("engineonoff").innerHTML="Engine OFF"
//     }
//     else{
//         console.log("unlocked");
//         return document.getElementById("engineonoff").innerHTML="Engine ON"
//     } 
// }

// function buzzer(){
//     const buzzer = document.getElementById("buzzer")

//     if( buzzer.checked==false){
//         console.log("locked");
//         return document.getElementById("buzzeronoff").innerHTML="Buzzer OFF"
//     }
//     else{
//         console.log("unlocked");
//         return document.getElementById("buzzeronoff").innerHTML="Buzzer ON"
//     } 
// }

function setup() {
    var locked = document.getElementById("lock");
    var engine = document.getElementById("engine");
    var buzzer = document.getElementById("buzzer");

    if (locked.checked == false) {
        document.getElementById("lock").value = "0"
        console.log("locked");
        return document.getElementById("unlock").innerHTML = "Unlocked"
    }
    else {
        document.getElementById("lock").value = "1"
        console.log("unlocked");
        return document.getElementById("unlock").innerHTML = "Locked"
    }
}

// function setup(){
//     const button = document.getElementById('submit');
//     button.addEventListener("click", async event =>{
//         const lock = document.getElementById("lock").value;
//         const engine = document.getElementById("engine").value;
//         const buzzer = document.getElementById("buzzer").value;
//         console.log(lock,engine,buzzer);
//     })
// }


// button.addEventListener('click', async event => {
//     const phone = document.getElementById('phone').value;
//     video.loadPixels();
//     const image64 = video.canvas.toDataURL();
//     const data = { lat, lon, phone, image64 };
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     };
//     const response = await fetch('/api', options);
//     const json = await response.json();
//     console.log(json);
//   });