var n = parseInt(prompt("Enter number:"));
var check2 = true;
while (n > 0) {
    var remain = n % 10;
    if (remain % 2 == 0) {
        check2 = false;
        break;
    }
    n = Math.floor(n / 10)
}
alert(check2)