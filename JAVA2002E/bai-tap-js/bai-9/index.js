do {
    var input = prompt("Enter number ?", "123676321");
    n = Number(input);
} while(Number.isNaN(n) && n < 0)

var y = 0;
while ( x > 0 ) {
    x = Math.floor(x/10);
    y = y*10 + x;
}
    if(x == y) document.write("Yes");
    else document.write("No");