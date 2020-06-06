const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
const linkItem = document.querySelectorAll('.nav-links li');

burger.addEventListener('click',()=> {
    links.classList.toggle('open');
    burger.classList.toggle('open');
    linkItem.forEach(link =>{
        link.classList.toggle('fade');
    })
});

linkItem.forEach(link => {
    link.addEventListener('click',()=> {
        links.classList.toggle('open');
    burger.classList.toggle('open');
    linkItem.forEach(link =>{
        link.classList.toggle('fade');
    })
    })
})
