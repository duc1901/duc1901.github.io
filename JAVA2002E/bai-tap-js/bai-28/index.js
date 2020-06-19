var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
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
];

var filterName = students.filter((students) 
=> students.lastName.slice(0,students.lastName.indexOf(" "))==="Do");

document.write("Result in console")
console.log(filterName)