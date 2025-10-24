const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup')
    const modalClose = modal.querySelector('.popup-close');
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

                let startTime = null;
                const duration = 200;

                function animate(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = (timestamp - startTime) / duration;
                    if (progress < 1) {
                        modal.style.opacity = progress.toString();
                        const translateX = -50 * (1 - progress);
                        modalContent.style.transform = `translateX(${translateX}px)`;
                        requestAnimationFrame(animate);
                    } else {
                        modal.style.opacity = '1';
                        modalContent.style.transform = 'translateX(0)';
                    }
                }
                requestAnimationFrame(animate);
            }
        })
    })

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}

export default modal