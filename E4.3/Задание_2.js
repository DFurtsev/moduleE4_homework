function checkStringInObject(object, string) {
    return (string in object)
}

const person = {
    city: "Moscow",
    age: 23
}

const student = Object.create(person);
student.ownCity = "Piter";
student.ownName = "Oleg";

console.log(checkStringInObject (student, 'age'))