// Задача 1

// const sheepArr = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]

// function sheepCount(array) {
//   let sheep = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === true) {
//       sheep++;
//     }
//   }
//   return sheep;
// }

// console.log(sheepCount(sheepArr));

//---------------------

// Задача 2
// Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6. Если введенное значение является строкой, оно должно возвращать «Ошибка».

// function countNumbers(num){
//     if(typeof num === 'number'){
//         return (num * 50) + 6
//     } else if(typeof num === 'string'){
//         return 'Error'
//     }
// }
// console.log(countNumbers(25));
// console.log(countNumbers('hello'));

//---------------------

// Задача 3

//Создайте функцию, вызываемую shortcut для удаления строчных гласных ( a, e, i, o, u) в заданной строке.

// function shortcut(string, callback){
//     let newWord = ''
//     for(let i = 0; i < string.length; i++){
//         if(!callback().includes(string[i])){
//          newWord += string[i]
//         }
//     }
//     return newWord
// }
// console.log(shortcut('hello', () => ['a', 'e', 'i','0','u']));

//---------------------

// Задача 4

//Напишите функцию bmi, вычисляющую индекс массы тела (bmi = вес/рост 2 ).
// если ИМТ <= 18,5, верните «Недостаточный вес»
// если ИМТ <= 25,0, верните «Нормальный»
// если ИМТ <= 30,0, верните «Избыточный вес»
// если ИМТ > 30, вернуть «Ожирение»

// function bmi(weight, height){
//     const calc = weight / (height ** 2);

//     if(calc <= 18.5){
//         return 'Underweight';
//     } else if (calc <= 25.0){
//         return 'Normal';
//     } else if( calc <= 30.0){
//         return 'Overweight';
//     } else {
//         return 'Obese';
//     }   
// }
// console.log(bmi(55, 1.67));

//---------------------

// Задача 6

// let trueOrFalse = (elem) => elem === true? elem = 'Yes': elem = 'No'

// console.log(trueOrFalse());

//---------------------

// Задача 7

// function getSumNum(num){
//     let sum = 0
//     for(let i = 0; i < num; i++){
//             sum+= i
    
//     }
//     return sum
// }

// console.log(getSumNum(6));

//---------------------

// Задача 8

// function SumArrays(arr){
//     let sum1 = 0
//     let sum2 = 0
//     for(let i = 0; i < arr.length; i++){
//         sum1+=arr[i]
//         sum2+= arr[i]
//     }
//     return [sum1 + sum2]
// }

// console.log(SumArrays([1,2,3], [1,2,3]));


