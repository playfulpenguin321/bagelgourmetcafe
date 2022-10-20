// SOURCE: https://www.youtube.com/watch?v=At4B7A4GOPg

const toggleButton = document.getElementsByClassName('dropdown')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

window.onscroll = function() {myFunction()};
