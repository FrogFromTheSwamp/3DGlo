import { animate } from "./helpers";

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup'); 
    const modalContent = modal.querySelector('.popup-content');

    buttons.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                modal.style.display = 'block';
                modal.style.opacity = '1';
                modalContent.style.transform = 'translateX(0)';
            } else {
                modal.style.display = 'block';
                modal.style.opacity = '0';
                modalContent.style.transform = 'translateX(-50px)';

                animate({
                    duration: 300,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress;
                    }
                });

                
            }
        })
    })

    modal.addEventListener('click', e => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    })
}

export default modal