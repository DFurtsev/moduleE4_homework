function getOwnKeysAndValues(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(`${key}: ${object[key]}`);
        }
    }
}

const person = {
    city: "Moscow",
    age: 23
}

const student = Object.create(person);
student.ownCity = "Piter";
student.ownName = "Oleg";

getOwnKeysAndValues (student)