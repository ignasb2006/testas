const suma = (a,b) => {
    console.log(a + b);
}

suma(5,6);

const nameCheck = (name) => {
    switch (name.toLowerCase()) {
        case "alice":
            console.log("Name is Alice");
            break;
        case "bob":
            console.log("Name is Bob");
            break;
        default:
            console.log("Name is neither Bob nor Alice");
    }
}

nameCheck("BOB");

const checkLeapYear = (year) => {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return "Metai yra Keliamieji";
    } else {
        return "Metai nera Keliamieji";
    }
}

let metai = prompt("Iveskite metus");

alert(checkLeapYear(metai));