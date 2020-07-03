var enter = prompt("Nhập vào để kiểm tra");
function cSpace(str){
    var count = 0;
    for (var i = 0; i < str.length; i++)
        if(str[i] == " ") {
            count++;
        }
        return count;
}
document.write("có " + cSpace(enter) + " khoảng trắng");