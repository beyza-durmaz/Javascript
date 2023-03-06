const counter = document.querySelector('.counter');
const btns = document.querySelectorAll('.btn');

let count = 0

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0
        }

        if (count > 0) {
            counter.style.color = 'green';
        } else if (count < 0) {
            counter.style.color = 'red';
        } else {
            counter.style.color = '#222';
        }

        counter.textContent = count;
    })
})