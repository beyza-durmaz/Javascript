const cards = [
    {
        "id": 1,
        "cardTitle": "Türkiye",
        "cardText": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "img": "https://images.unsplash.com/photo-1621165263528-1e3e07db1afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "id": 2,
        "cardTitle": "Japanese",
        "cardText": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "img": "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80"
    },
    {
        "id": 3,
        "cardTitle": "Finland",
        "cardText": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "img": "https://images.unsplash.com/photo-1505136026201-bbc1bc0949fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80"
    },
    {
        "id": 4,
        "cardTitle": "South Korea",
        "cardText": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "img": "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "id": 5,
        "cardTitle": "England",
        "cardText": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "img": "https://images.unsplash.com/photo-1549470810-ae1a0da5b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "id": 6,
        "cardTitle": "Denmark",
        "cardText": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "img": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "id": 7,
        "cardTitle": "India",
        "cardText": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "img": "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
    }
]

const title = document.getElementById('title');
const text = document.getElementById('text');
const img = document.getElementById('img');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showCountry()
})

function showCountry(){
    const item = cards[currentItem];
    img.src = item.img;
    title.textContent = item.cardTitle;
    text.textContent = item.cardText;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > cards.length - 1){
        currentItem = 0
    }
    showCountry()
})  

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = cards.length;
    }
    showCountry();
})