const input = document.getElementById("input")
function appendDisplay(value) {
    input.value += value
}

function clearDisplay() {
    input.value = ""
}

function calculate() {
    try{
        let replaceMultiply = input.value.replace(/x/g, '*')
        input.value = eval(replaceMultiply)
    }
    catch {
        input.value = "Error"
    }
}
