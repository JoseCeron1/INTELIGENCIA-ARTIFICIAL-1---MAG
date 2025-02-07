function reflex_agent(location, state){
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states){
    var location = states[0];        
    var state = location == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    
    document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    } 
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    
    // se implementa un if para poder ensuciar los cuartos A y B pero empieza limpiando el cuarto B
    if (states[1] === "CLEAN" && states[2] === "CLEAN" && !states[3]) {
        document.getElementById("log").innerHTML += "<br>INSERT DIRTY ROOMS...";
        states[1] = "DIRTY";
        states[2] = "DIRTY";
        states[0] = "B";
        states[3] = true;
    }
    
    setTimeout(function() { test(states); }, 2000);
}

var states = ["A", "DIRTY", "DIRTY", false];
test(states);

