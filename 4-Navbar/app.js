const icon = document.querySelector('.icon');
const link = document.querySelector('.links')

icon.addEventListener('click', function(){
    const toggle = icon.classList.toggle('open')
    if(toggle){
        link.className += ' show-links'
    } else {
        link.className = 'links'
    }
})