// №1

// let userName = prompt("Введите ваше имя:");
// alert("Привет, " + userName + "!");

// №2

// const today = 2023;
// let userBirthDay = prompt("Введите свой год рождения:");
// let userBDYear = alert("Тебе " + (today - userBirthDay) + " лет.");

// №3

// let width = prompt("Введите длину стороны квадрата:");
// alert("Переметр квадрата со стороной " + width + " = " + width**2);

// №4

// let radius = prompt("Введите радиус окружности:");
// alert("Площадь окружности с радиусом " + radius + " = " + Math.round(Math.PI*radius**2));

// №5

// let distance, time;

// distance = prompt("Введите расстояние до города:");
// time = prompt("Введите время, которое займет дорога до этого города:")

// let averageSpeed = distance/time;

// alert("Чтобы добраться до этого города, вам понадобится ехать со скоростью: " + averageSpeed + " км/ч")

// №6

// const USD_TO_EURO_RATE = 0.937462;

// function convertDollarsToEuros(dollars) {
//   return dollars * USD_TO_EURO_RATE;
// }

// let dollars = parseFloat(prompt("Введите сумму в долларах:"));

// if (isNaN(dollars)) {
//   alert("Вы ввели некорректное значение.");
// } else {
//   let euros = convertDollarsToEuros(dollars);
//   alert(`${dollars} долларов равно ${euros} евро.`);
// }

// №7

// const FILE_SIZE_MB = 820;

// function calculateFilesOnFlashDrive(flashDriveSize) {
//   let flashDriveSizeMB = flashDriveSize * 1024;
//   return Math.floor(flashDriveSizeMB / FILE_SIZE_MB);
// }

// let flashDriveSize = parseFloat(prompt("Введите объем флешки в Гб:"));

// if (isNaN(flashDriveSize)) {
//     alert("Вы ввели некорректное значение.");
//   } else {
//     let filesCount = calculateFilesOnFlashDrive(flashDriveSize);
//     alert(`На флешку объемом ${flashDriveSize} Гб поместится ${filesCount} файл размером 820 Мб.`);
//   }

// №8

// function calculateChocolateAndChange(walletAmount, chocolatePrice) {
//   let chocolatesCount = Math.floor(walletAmount / chocolatePrice);
//   let change = walletAmount % chocolatePrice;
//   return [chocolatesCount, change];
// }

// let walletAmount = parseFloat(prompt("Введите сумму денег в кошельке:"));
// let chocolatePrice = parseFloat(prompt("Введите цену одной шоколадки:"));

// if (isNaN(walletAmount) || isNaN(chocolatePrice) || (walletAmount<0)) {
//   alert("Вы ввели некорректное значение.");
// } else {
//   let result = calculateChocolateAndChange(walletAmount, chocolatePrice);
//   let chocolatesCount = result[0];
//   let change = result[1];
//   alert(
//     `Вы можете приобрести ${chocolatesCount} шоколадок, у вас останется ${change} рублей в кошельке.`
//   );
// }

// №9

// let userNumber = prompt('Введите трехзначное число: ');
// let a = Number(userNumber % 10);
// let b = Number((userNumber - a) / 10 % 10);
// let c = Number((userNumber - a - b * 10) / 100);
// alert('Перевернутое число будет: ' + (a * 100 + b * 10 + c));

// №10

// let userNumber = prompt("Введите целое число:");

// if (userNumber%2 == 0) {
//     alert("Число " + userNumber + " - четное");
// } else {
//     alert("Число " + userNumber + " - нечетное");
// }