var btnShow = document.getElementById("js-btn-show");
var inputValue = document.getElementById("js-input-value")
var pMessage = document.getElementById("js-message")

btnShow.addEventListener("click", () => {
    // alert(inputValue.value)
    pMessage.innerText = inputValue.value
})

// Caculate
var value1 = document.getElementById("input1");
var value2 = document.getElementById("input2");
var btn = document.getElementById("caculate");
var result = document.getElementById("result");
var opr = document.getElementById("opr");

value1.oninput = caculate;
value2.oninput = caculate;


function getOperator() {
    return opr.options[opr.selectedIndex].value;
}
function caculate() {
    let firstValue = Number(value1.value);
    let secondValue = Number(value2.value);
    let opr = getOperator();
    total = 0;
    switch(opr) {
        case "+":
            total = firstValue + secondValue;
            break;
        case "-":
            total = firstValue - secondValue;
            break;
        case "x":
            total = firstValue * secondValue;
            break;
        case "/":
            total = firstValue / secondValue;
            break;
    }
    result.value =total;
}

// create elements, appendChild
var unorderList = document.getElementById("js-todo");
var inputAdd = document.getElementById("js-input-add");
var btnAdd = document.getElementById("js-btn-add");

btnAdd.onclick = () => {
    let newTask = inputAdd.value;
    let listItem = document.createElement("li");
    let buttonRemove = document.createElement("button");
    listItem.innerText = newTask;
    buttonRemove.innerText = "–";
    listItem.append(buttonRemove);
    unorderList.append(listItem);
}