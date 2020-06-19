var students = [
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    },
]

function properCase(str) {
    return str.toLowerCase().split(" ").map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(" ");
}

var newStu = students.map((students) => {
    var fixName = {...students};
    fixName.firstName = properCase(fixName.firstName);
    fixName.lastName = properCase(fixName.lastName);
    return fixName;
});

var filterName = newStu.filter((newStu) 
=> newStu.firstName.length>3 && (newStu.firstName.includes("a") || newStu.firstName.includes("A")));

document.write("Result in console")
console.log(newStu)
console.log(filterName)