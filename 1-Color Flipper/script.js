const colors = ['#eeeff1', 'red', 'blue', 'rgb(255, 99, 71)', '#f5ef42', 'rgb(238, 130, 238)', '#4287f5', '#c242f5'];

const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}