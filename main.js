// Loader
let loader = document.querySelector('.loader')

setTimeout(() => {
    loader.classList.add('loader__hide')
    setTimeout(() => {
      loader.classList.add('loader__none')
    }, 500)
  }, 2000)

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};