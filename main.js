let output = document.getElementById("calc");




function display(nam) {
    output.value += nam;

}
// clear  
function Clear() {
    output.value = ""
}

// delete 
function Delete() {
    output.value = output.value.slice(0, -1)
}
// calc

function calc() {
    try {
        output.value = eval(output.value)
    } catch (err) {
        output.value = "error"
    }
}

