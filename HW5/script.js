// задача 1

// 1 вариант решения
// async function getTodos(username) {
//   let urlUsers = "https://jsonplaceholder.typicode.com/users";
//   let resUsers = await fetch(urlUsers);
//   let dataUsers = await resUsers.json();
//   let user = dataUsers.find(elem => elem.username === username)

//   console.log(user.id);

//   let urlToDos = 'https://jsonplaceholder.typicode.com/todos'
//   let resToDos = await fetch(urlToDos)
//   let dataToDos = await resToDos.json()
//   let result = dataToDos.filter(elem => elem.userId === user.id)
//   console.log(result);
// }
// getTodos('Antonette');

// 2 вариант решения 
async function getTodos(username) {
  let urlUsers = `https://jsonplaceholder.typicode.com/users?username=${username}`;
  let resUsers = await fetch(urlUsers);
  let dataUsers = await resUsers.json();

  let urlToDos = `https://jsonplaceholder.typicode.com/todos?userId=${dataUsers[0].id}`;
  let resToDos = await fetch(urlToDos);
  let dataToDos = await resToDos.json();
  console.log(dataToDos);
}
getTodos("Antonette");

//  Задача 2 
async function getComments(title) {
  try {
    let urlPosts = `https://jsonplaceholder.typicode.com/posts?title=${title}`;
    let resPosts = await fetch(urlPosts);
    let dataPosts = await resPosts.json();

    let urlComments = `https://jsonplaceholder.typicode.com/comments?postId=${dataPosts[0].id}`;
    let resComments = await fetch(urlComments);
    let dataComments = await resComments.json();
    console.log(dataComments);
  } catch {
    console.log("Error");
  }
}

getComments("qui est esse");

// Задача 3 

async function getPhotoByNickName(username) {
    let urlUser = `https://jsonplaceholder.typicode.com/users?username=${username}`
    let resUser = await fetch(urlUser)
    let dataUser = await resUser.json()

    let urlPhotos = `https://jsonplaceholder.typicode.com/photos?albumId=${dataUser[0].id}`
    let resPhoto = await fetch(urlPhotos)
    let dataPhoto = await resPhoto.json()
    console.log(dataPhoto);
}
getPhotoByNickName('Samantha')