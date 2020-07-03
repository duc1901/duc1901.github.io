var input = prompt("Nhập mảng (VD:1,2,3,4,...", "1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1");

var array = input.split(',').map(function(item) {
    return parseInt(item, 10);
});
document.write("Min: " + Math.min.apply(null, array) + "<br/>");
document.write("Max: " + Math.max.apply(null, array) + "<br/>");
document.write("Số trung bình: " + eval(array.join('+'))/array.length + "<br/>");