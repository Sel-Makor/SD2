"use strict";

class Student {
    Id;
    name;

    constructor(id, name) {
        this.id;
        this.name = name;
    }

}

var students = [
    new Student("001", "Sel"),
    new Student("002", "Vader"),
    new Student("003", "Vitiate")
];

function printStudents() {
    var text = "";
    for (var student of students) {
        text = text + student.id + ":" + student.name + "<br>";
    }

    var main = document.getElementById("main");

    main.innerHTML = text;
}