function deleteSpace(str){
    str = str.trim();
    while(str.includes(" ")){
        str = str.substring(0,str.indexOf(" ")).concat(str.substring(str.indexOf(" ")+1,str.length));
    }
    return str;
}
var enter = prompt("Nhập vào đây:");
document.write(enter + " ---> " +deleteSpace(enter));
