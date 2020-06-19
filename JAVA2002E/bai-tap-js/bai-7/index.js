function tinh_tong(n) {
    var i = 0;
    while (i <= n) {
        if (i % 2 == 1){
            s += i;
        }
        i++;
    }
    return s;
}

var n = parseInt(prompt("Enter number:"));
var s = 0;
alert("Tổng các số từ " + 1 + " đến " + n + " là: " + tinh_tong(n))
