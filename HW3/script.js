const root_container = document.querySelector('#root')

let names = [
    {id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
    {id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
    {id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
    {id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
    {id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
    {id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
    {id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
    {id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
    {id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
]

let data = JSON.parse(localStorage.getItem('names')) ?? names

function render(array) {
    root_container.innerHTML =''
    for(let elem of array){
    const card_container = document.createElement('div')
    card_container.className = 'card_container'
    const imageElem = document.createElement('img')
    const nameElem = document.createElement('p')
    const salaryElem = document.createElement('p')
    const idElem = document.createElement('p')

    nameElem.className = 'name_user'
    salaryElem.className = 'salary_user'
    idElem.className = 'id_user'

    imageElem.src = elem.image
    nameElem.innerText = `Name: ${elem.name}`
    salaryElem.innerText = `Salary: ${elem.salary}`
    idElem.innerText = `User number: ${elem.id}`

   card_container.addEventListener(('click'), (e) => {
    let newArr = array.filter(el => el.id != elem.id)
    render(newArr)
   })

   localStorage.setItem('names', JSON.stringify(array))

    root_container.append(card_container)
    card_container.append(imageElem, nameElem, salaryElem, idElem)
    }
}





render(names)