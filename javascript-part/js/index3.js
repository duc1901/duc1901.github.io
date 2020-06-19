// var hello = "Hello World"
// var helloThuong = "Hello Thuong"
// var helloChinh = "Hello Chinh"
// var helloClass = "Hello Class"
// console.log(hello,helloThuong , helloChinh, helloClass)

// // usage of template string 
// var introduce = "I'm Thai and have age is 22"

// function getIntroduce(name ,age) {
//     var introduce = "I'm " + name + " and have age is " + age + "."
//     var introduce = 
//     return introduce
// }

// console.log(getIntroduce("Khoi", 25))

var str = "Today is a beautiful day, is'nt it?"
function myReplace(str, oldStr, newStr) {
    var pos = str.indexOf(oldStr)
    if (pos === -1) {
        return str
    }
    str = str.slice(0, pos) + "good" + str.slice(pos + oldStr.length)
    return str
}
console.log("str: ", myReplace(str, "beautiful", "good"))
 // trim
function validateName(name) {
    name = name.trim()
    // while (name.includes("  ")) {
    //     name = name.replace("  ", "  ")
    // }
    name = name.replace(/\s+/g, " ")
    return name
}
var username = "    Dinh    Xuan    Tien    "
console.log("trim: >" + username.trim() + "<")
console.log("validateName: >" + validateName(username) + "<")