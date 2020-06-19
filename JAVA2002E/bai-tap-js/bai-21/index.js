var input = prompt("Nhập mảng (VD:1,2,3,4,...", "1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1");

var array = input.split(',').map(function(item) {
    return parseInt(item, 10);
});

var reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write("Tổng của mảng a = [" + input + "] là: " + array.reduce(reducer));
