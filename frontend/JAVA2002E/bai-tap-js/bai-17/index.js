var num1, num2, num3;
do {
    num1 = parseInt(prompt("Enter number 1:"));
    num2 = parseInt(prompt("Enter number 2:"));
    num3 = parseInt(prompt("Enter number 3:"));
} while (Number.isNaN(num1) && Number.isNaN(num2) && Number.isNaN(num3))

function min(a, b, c) {
    return Math.min(a, b, c);
}

function max(a, b, c) {
    return Math.max(a, b, c);
}
document.write("Input: " + num1 + ", " + num2 + ", " + num3 + "." + "<br/>");
document.write("Min: " + min(num1, num2, num3) + "<br/>");
document.write("Max: " + max(num1, num2, num3) + "<br/>");