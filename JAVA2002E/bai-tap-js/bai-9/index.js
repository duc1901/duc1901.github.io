do {
    var input = prompt("Enter number ?", "123676321");
    n = Number(input);
} while(Number.isNaN(n) || n < 0)

var a = 0;
while ( n > 0 ) {
    n = Math.floor(n/10);
    a = a*10 + n;
}
    if(n == a) {document.write("Yes")}
    else {document.write("No")}