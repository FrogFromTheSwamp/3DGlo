const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    menuBtn.addEventListener('click', e => {
        if (e.target.closest('div.menu')) {
            handleMenu();
        }
    })

    menu.addEventListener('click', e => {
        console.log(e.target)
        if (e.target.classList.contains('close-btn') || e.target.closest('li')) {
            handleMenu();
        }
    })
}

export default menu