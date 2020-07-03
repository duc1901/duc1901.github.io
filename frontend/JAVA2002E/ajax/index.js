function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML =
            //     this.responseText;
            // console.log(this.responseText);
            let students = JSON.parse(this.responseText);
            console.log("Students: ", students[0])
            let table = document.getElementById("js-table");
            for (let student of students) {
                console.log(student);
                let row = document.createElement("tr");
                let idCol = document.createElement("td");
                idCol.innerHTML = student.id;
                let createAtCol = document.createElement("td");
                createAtCol.innerHTML = student.createdAt;
                let nameCol = document.createElement("td");
                nameCol.innerHTML = student.name;
                let imgCol = document.createElement("td");
                imgCol.innerHTML = student.avatar;
                row.append(idCol, createAtCol, nameCol, imgCol);
                table.append(row);
            }
        }
    };
    xhttp.open("GET", "https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users", true);
    xhttp.send();
}

// loadData()