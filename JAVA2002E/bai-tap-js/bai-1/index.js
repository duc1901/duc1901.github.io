var interNum;
var n;
do {
    interNum = parseInt(prompt("Enter number:"))
    n = Number(interNum);
} while (Number.isNaN(n)) {
    for ( i = 1; i <= n; i++) {
        document.write(i + " ")
    }
}

