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
// function setup() {
//     const button = document.getElementById('submit');
//     button.addEventListener('click', async event => {
//     const lock = document.getElementById("lock").value;
//     const engine = document.getElementById("engine").value;
//     const buzzer = document.getElementById("buzzer").value;
//     const action = { lock, engine, buzzer};
//     console.log(action);
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(action)
// };
// const response = await fetch('/api', options);
// const json = await response.json();
// console.log(json);


// var action = {
//     lock : "locked",
//     Engine : "Engine OFF",
//     Buzzer : "0"
// }
// console.log(action);

// if (lock.checked == false) {
//     document.getElementById("lock").value = "0"
//     console.log("Locked");
//     return document.getElementById("unlock").innerHTML = "locked"
// }
// else if(lock.checked == true) {
//     document.getElementById("lock").value = "1"
//     console.log("Unlocked");
//     return document.getElementById("unlock").innerHTML = "Unocked"
// }


// else if(engine.checked == false) {
//     document.getElementById("engine").value = "0"
//     console.log("Engine OFF");
//     return document.getElementById("engineonoff").innerHTML = "Engine OFF"
// }
// else if(engine.checked == true) {
//     document.getElementById("engine").value = "1"
//     console.log("Engine OFF");
//     return document.getElementById("engineonoff").innerHTML = "Engine ON"
// }


// else if(engine.checked == false) {
//     document.getElementById("buzzer").value = "0"
//     console.log("Buzzer OFF");
//     return document.getElementById("buzzeronoff").innerHTML = "Buzzer OFF"
// }
// else if(engine.checked == true) {
//     document.getElementById("buzzer").value = "1"
//     console.log("Buzzer OFF");
//     return document.getElementById("buzzeronoff").innerHTML = "Buzzer ON"
// }
//     });
// }

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
// var str = '';

// for ( i = 0; i < 3; i++) {
//     if ( checks[i].checked === true ) {
//         str += checks[i].value + " ";
//     }
// }



async function getValue() {
    var checks = document.getElementsByClassName('switch');
    const lock = document.getElementById("lock");
    const engine = document.getElementById("engine");
    const buzzer = document.getElementById("buzzer");
    var actions = {
        Lock: "Locked",
        Engine: "OFF",
        Buzzer: "Stop"
    }

    if (lock.checked == true && engine.checked == false && buzzer.checked == false) {
        actions.Lock = "Unlocked";
    }
    else if (engine.checked == true && lock.checked == false && buzzer.checked == false) {
        actions.Engine = "ON";
    }
    else if (buzzer.checked == true && lock.checked == false && engine.checked == false) {
        actions.Buzzer = "Sound";
    }
    else if (lock.checked == true && engine.checked == true && buzzer.checked == false) {
        actions.Lock = "Unlocked";
        actions.Engine = "ON";
    }
    else if (lock.checked == true && buzzer.checked == true && engine.checked == false) {
        actions.Lock = "Unlocked";
        actions.Buzzer = "Sound";
    }
    else if (engine.checked == true && buzzer.checked == true && lock.checked == false) {
        actions.Engine = "ON";
        actions.Buzzer = "Sound";
    }
    else if (lock.checked == true && engine.checked == true && buzzer.checked == true) {
        actions.Lock = "Unlocked";
        actions.Engine = "ON";
        actions.Buzzer = "Sound";
    }
    else {
        alert("Nothing change...");
    }

    console.log(actions);
    // const data = JSON.stringify(actions)
    // console.log(data);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(actions)
    };
    const response = await fetch('http://localhost:3000/api', options);
    const json = await response.json();
    console.log(json);
}