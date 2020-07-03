function getId(str){
    return str.slice(str.lastIndexOf("/") + 1, str.length);
}

var input = prompt("Enter link profile: ");
document.write("Result: " + getId(input));