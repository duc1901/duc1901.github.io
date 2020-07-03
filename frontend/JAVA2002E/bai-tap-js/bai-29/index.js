var students = [
    {
        id: "T3HXX1",
        firstName: "Ngan",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]

var filter = students.sort((a,b) => {
    if(a.firstName<b.firstName) {return -1}
    else if(b.firstName<a.firstName) {return 1}
    return 0
});

document.write("Result in console")
console.log(filter)