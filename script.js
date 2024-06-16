// Initializing bar, close, and navbar elements
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Adding event listeners for opening and closing the navbar
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Adding event listener for product1 navigation
const product1 = document.getElementById('product1');
if (product1) {
    product1.addEventListener('click', function() {
        window.location.href = 'sproductniko.html';
    });
}

// Initializing MainImg and smallimg elements
const MainImg = document.getElementById('MainImg');
const smallimg = document.getElementsByClassName('small-img');

// Adding onclick event listeners to smallimg elements
if (smallimg.length > 0) {
    for (let i = 0; i < smallimg.length; i++) {
        smallimg[i].onclick = function() {
            MainImg.src = smallimg[i].src;
        };
    }
}



