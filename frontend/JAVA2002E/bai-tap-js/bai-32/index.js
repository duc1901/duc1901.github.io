var input = prompt("Nhập mảng", "1,3,6,9,11,20");
var k = prompt("k?", "13")

var array = input.split(',').map(function(item) {
    return parseInt(item, 10);
});

array.push(Number(k))
array.sort(function(a, b) {
    return a - b;
});

document.write("Result in console")
console.log(array)