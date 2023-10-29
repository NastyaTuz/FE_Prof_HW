// 1

function checkDate() {
  let lastDay = new Date("2023-11-01 00:00 GMT");
  let days = lastDay.getTime() - new Date().getTime();
  let restDays = Math.round(days / (1000 * 60 * 60 * 24));

  // console.log(restDays);
}
// checkDate();

// 2

function isItFridayToday() {
  let curDay = new Date().getDay();
  if (curDay === 5) {
    console.log("Сегодня пятница");
  } else if (curDay === 4) {
    console.log("Пятница была вчера");
  } else if (curDay === 6) {
    console.log("Завтра пятница");
  } else {
    const daysUntilFriday = curDay < 5 ? 5 - curDay : 7 - curDay + 5;
    const dayString = daysUntilFriday === 1 ? "день" : "дня";
    console.log(`Пятница будет через ${daysUntilFriday} ${dayString}`);
  }
}
// isItFridayToday();

// 3

let prices = [
  "Цена товара - 1200$",
  "Стоимость - 500$",
  "Цена не определена",
  "9999",
  "Ценовая категория - больше 300$",
  "Цена за услугу 500 EUR",
];

function getInfo(prices) {
  let price = 0;
  let dollar = 0;
  prices.forEach((elem) => {
    if (elem.includes("Цена")) {
      price++;
    }
    if (elem.includes("$")) {
      dollar++;
    }
  });
  return [price, dollar];
}
// console.log(getInfo(prices));

// Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру:

let arrays = [
  "89840959944 exampleonemain@mail.ru",
  "+79840959933 forreason@yandex.net",
  "somemail@mail.ru",
  "89840959900 example@gmil.ru",
  "+79840959911",
  "grandthere@mail.ru",
  "jetpackfor@gmail.ru",
  "89840959922 some@yandex.com",
];


let phones = [];
let emails = [];

for (let i = 0; i < arrays.length; i++) {
  let parts = arrays[i].split(' ');

  if (parts.length == 2) {
    let phoneOrEmail = parts[0];
    let address = parts[1];

    if (typeof phoneOrEmail.includes('8')) {
      phones.push(phoneOrEmail);
    } 
    if (address.includes('@')) {
  
      emails.push(address);
    }
  }
}

// console.log("Телефоны:", phones);
// console.log("Emails:", emails);

// Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.

	let newPhones = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859', 
'4000 0016 3556 6899', 
'4000 0017 4456 4699'
]

let result = newPhones.map(el => {
  return `${el.slice(0,4)} ***** ${el.slice(-4)}`
})
console.log(result);