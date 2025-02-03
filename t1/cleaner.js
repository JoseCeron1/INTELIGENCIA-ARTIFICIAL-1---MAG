function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

const estadosPosibles = [
    ["A", "DIRTY", "DIRTY"],
    ["A", "CLEAN", "DIRTY"],
    ["A", "DIRTY", "CLEAN"],
    ["A", "CLEAN", "CLEAN"],
    ["B", "DIRTY", "DIRTY"],
    ["B", "CLEAN", "DIRTY"],
    ["B", "DIRTY", "CLEAN"],
    ["B", "CLEAN", "CLEAN"]
];

let estadoActualIndex = 0;

function test(states) {
    var location = states[0];		
    var state = (location == "A") ? states[1] : states[2];
    var action_result = reflex_agent(location, state);

    document.getElementById("log").innerHTML += `<br> Location: ${location} | Action: ${action_result}`;

    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    } else if (action_result == "RIGHT") {
        states[0] = "B";
    } else if (action_result == "LEFT") {
        states[0] = "A";
    }

    if (states[1] == "CLEAN" && states[2] == "CLEAN") {
        estadoActualIndex++;

        if (estadoActualIndex < estadosPosibles.length) {
            document.getElementById("log").innerHTML += `<br> Cambiando al siguiente estado: ${JSON.stringify(estadosPosibles[estadoActualIndex])}`;
            states[0] = estadosPosibles[estadoActualIndex][0];
            states[1] = estadosPosibles[estadoActualIndex][1];
            states[2] = estadosPosibles[estadoActualIndex][2];
        } else {
            return;
        }
    }

    setTimeout(function() { test(states); }, 1000);
}

var states = [...estadosPosibles[estadoActualIndex]];
test(states);
