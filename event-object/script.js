const logo = document.querySelector('img');

function onClick(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    e.target.style.backgroundColor = "red";
}

logo.addEventListener('click', onClick);