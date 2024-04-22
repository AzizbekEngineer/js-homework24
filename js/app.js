import { usersImg } from './dataImg.js'
const API_URL = 'https://jsonplaceholder.typicode.com/users'
const cards = document.querySelector('.todo__cards')


async function getApi(api) {
    let data = await fetch(api)
    data
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
getApi(API_URL)
function createCard(data) {
    let card = ''
    data.forEach(item => {
        card += `
     <div class="card">
        <div class="card__img">
            <img src="${usersImg[item.id - 1]}" alt="">
        </div>
       <div class="card__info">
            <h3><span>Name: </span>${item.name}</h3>
            <h4><span>Username: </span>${item.username}</h4>
            <p><span>Email: </span><a class = "cite" target="_blank" href="${item.email}">${item.email}</a></p>
            <p class="address"><span>Address: </span>${item.address.street + '  ' + item.address.suite + '  ' + item.address.city}</p>
            <p><span>Phone: </span><a class = "cite" target="_blank" href="tel:${item.phone}">${item.phone}</a></p>
            <p><span>Website: </span><a class = "cite" target="_blank" href="${item.website}">${item.website}</a></p>
            
        </div>
    </div>
    `
    });
    cards.innerHTML = card
}
