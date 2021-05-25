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
    document.getElementById("user_action").innerHTML ="Lock Status : " + actions.Lock + ", " + "Engine Status : " + actions.Engine + ", " + "Buzzer Status : " + actions.Buzzer;
    const controls = JSON.stringify(actions);

    console.log(controls);

    const data = JSON.stringify(actions)
    console.log(data);
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