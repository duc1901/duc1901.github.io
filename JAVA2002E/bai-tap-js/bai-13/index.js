var n = prompt("Nhập gì đó:")

function reverseString(str) {
    return str.split("").reverse().join("");
}
document.write(n + " ---> " + reverseString(n))