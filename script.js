const list = document.querySelector('.header .nav-bar .nav-list .list');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header');
list.addEventListener('click', () =>{
    list.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#29323c';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach(item => {

    item.addEventListener('click', () => {
        list.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })

})

// Typing animation
var typed = new Typed(".typing2",{
    strings: ["Full Stack Java Developer", "Backend Developer","Java Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true
});
var typed = new Typed(".typing",{
    strings: ["Full Stack Java Developer", "Backend Developer","Java Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true
});