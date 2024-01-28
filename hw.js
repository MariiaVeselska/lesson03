// У (рік) році (ІМ'Я) (прізвище) буде мати вік (обчислене число) років

let yourBorn = "1984";
const currentYear = 2030;
let fullName = 'Вязовська арина Сергіївна';


let nameNew = fullName.replace("арина", "Марина"); //замінити арина на Марина
let nameUpper = nameNew.toUpperCase(); //зробити всі великими

let indexProbil = nameUpper.indexOf(" "); //знайти номер пробіла
//console.log(indexProbil);
let indexS = nameUpper.indexOf("СЕРГІЇВНА"); //знайти номер літери С
//console.log(indexS);
let nameOst = nameUpper.substring(indexProbil+1, indexS-1);
//console.log(nameOst);

let surName = fullName.substring(0, indexProbil);
//console.log(surName);

let yearBornInt = parseInt(yourBorn);
//console.log(yearBornInt);

let vik = currentYear - yearBornInt;

console.log(`У ${currentYear} році ${nameOst} ${surName} буде мати вік ${vik} років`); 