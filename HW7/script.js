// Напишите класс NumberArray, который будет содержать сво-во array. В качестве значения св-ва необходимо сформировать массив с числовыми типами.

class NumberArray {
  constructor(array) {
    this.array = array;
  }
  getLastElem() {
    console.log(this.array[this.array.length - 1]);
  }
  getAbs() {
    console.log(Math.abs(this.array[this.array.length - 1] - this.array[0]));
  }
  getSum() {
    let sum = 0
    for(let i = 0; i < this.array.length; i++){
        sum += this.array[i]
    }
    return sum
  }

  setArray(n){
        this.array = this.array.map(el => el * n)
}

createObject(){
    let obj = {}
    for(let i = 0; i < this.array.length; i++){
        obj[`elem${i + 1}`] = this.array[i];
    } return obj
} 
}
let newArr = new NumberArray([1, 2, 3, 4, 5]);

newArr.getLastElem();

newArr.getAbs();

console.log(newArr.getSum())

// newArr.setArray(3)
// console.log(newArr);

console.log(newArr.createObject());
