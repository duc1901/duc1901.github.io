function tinh_tong(n) {
    for (i = 0; i <= n; i++) {
        s += Math.pow(i, 2);
    }
    return s
}

var n = parseInt(prompt("Enter number:"));
var s = 0;
alert("Tổng các số từ " + 1 + " đến " + n + " là: " + tinh_tong(n))