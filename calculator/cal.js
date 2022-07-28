
let operation;
let operationToperform;
function addNumber(a) {
    let result = document.getElementById('result').value += a;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "*") {
            operationToperform = "multiply"
        }
        if (result[i] == "/") {
            operationToperform = "divide"
        }
    }
    if (a == "clear") {
        document.getElementById('result').value = ""
    }
}
function equal() {
    let result = document.getElementById('result').value

    if (operationToperform == "multiply") {
        const check = result.split('*')[0]
        const check2 = result.split('*')[1]
        const finalresult = check * check2
        document.getElementById('result').value = finalresult;
    }
    if (operationToperform == "divide") {
        const check = result.split('/')[0]
        const check2 = result.split('/')[1]
        const finalresult = check / check2
        document.getElementById('result').value = finalresult;
    }
}
