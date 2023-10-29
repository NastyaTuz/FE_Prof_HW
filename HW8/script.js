// 1

class Delivery{
    constructor(name, phone){
        this.name = name,
        this.phone = phone
    }

    get validPhone(){
       return phone.includes('+')? true : false
    }
}


let name = "Pizza" 
let phone = "81234567890" 

let info = new Delivery(name,phone)

// console.log(info.validPhone)
 
// --------------------------------

// 2
class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

class Users extends Permissions{
    constructor(name){
        super()
        this.name = name
    }
}

let user1 = new Users('Nastya')

// console.log(user1.create);
// console.log(user1.read);
// console.log(user1.update);
// console.log(user1.remove);

// -------------------------

// 3 Все печатные издания имеют название, год издания, состоят из определенного количества страниц, а ещё могут портиться. 

 

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state, type){
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    }
    fix(){
        console.log(this.state * 1.5);
    }

    set setState(num){
        if(num < 0){
            this.state = 0
        } else if(num > 100){
            this.state = 100
        } else{
            this.state = num
        }
    }

    get getState(){
        return this.state
    }
}

const book = new PrintEditionItem('book', '12.04.2010', '250')
// console.log(book);
// book.fix()
// book.setState = 50
// console.log(book);

// console.log(book.getState);

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state)
        this.type = 'magazine'
    }
}

const newMagazine = new Magazine('magazine', '2012', '240')
console.log(newMagazine);
 

class Book extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, author, state, type) {
        super(name, releaseDate, pagesCount, state)
        this.author = author
        this.type = 'book'
    }
}
const newBook = new Book('book', '2003', 500, 'S.King')
console.log(newBook);

class NovelBook extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state)
        this.type = 'novel'
    }
}

class FantasticBook extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state)
        this.type = 'fantastic'
    }
}

class DetectiveBook extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state)
        this.type = 'detective'
    }
}





