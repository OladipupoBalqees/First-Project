let settingsmenu = document.querySelector(".settings-menu-inner");
let navUserIcon  = document.querySelector('.nav-user-icon');

navUserIcon.addEventListener('click', () => {
    settingsmenu.classList.toggle('hide');  
})
