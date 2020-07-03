var input = prompt("Nhập mảng (VD:1,2,3,4,...", "1,2,3,4,6,7");
var k = prompt("k?", "5")

var arr = input.split(',').map(function(item) {
    return parseInt(item, 10);
});

function closest(value, array) {
    var result = [];
    array.some(function (a) {
        if (a > value) {
            return result.push(a);
        }
        result = [a];
        return a === value;
    });
    return result;
}
document.write("Result: " + closest(k, arr));
console.log(closest(k, arr));
