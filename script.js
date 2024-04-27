document.getElementById("gameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var danielState = document.getElementById("Daniel").value;
    var tristanState = document.getElementById("Tristan").value;
    var dennisState = document.getElementById("Dennis").value;

    if (danielState === "" || tristanState === "" || dennisState === "") {
        alert("Please select a state for all people.");
        return false;
    }

    if (tristanState === "Grubbin") {
        alert("Tristan is grubbin. No gaming :(");
    } else {
        if (dennisState === "Homework") {
            alert("Dennis has homework. Gaming at 10:00PM for like 30 mins.");
        } else if (danielState === "Homework") {
            alert("Daniel has homework. No gaming until Tristan is done grubbin (never)");
        } else {
            alert("We gamin!");
        }
    }
});
