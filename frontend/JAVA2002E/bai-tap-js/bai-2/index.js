do {
    var interNum = prompt("Enter Number:");
    var n = Number(interNum);
    for ( i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            document.write(i+ " ");
        }
    }
} while (Number.isNaN(n) || n <= 0);

