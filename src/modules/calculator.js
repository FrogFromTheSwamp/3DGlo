const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = calcBlock.querySelector('.calc-type');
    const calcSquare = calcBlock.querySelector('.calc-square');
    const calcCount = calcBlock.querySelector('.calc-count');
    const calcDay = calcBlock.querySelector('.calc-day');
    const total = calcBlock.querySelector('#total');

    const animateTotal = (start, end, duration = 350) => {
        const frameRate = 30;
        const totalFrames = Math.round((duration / 1000) * frameRate);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const current = Math.round(start + (end - start) * progress);
            total.textContent = current;

            if (frame >= totalFrames) {
                clearInterval(counter);
                total.textContent = Math.round(end);
            }
        }, 1000 / frameRate);
    }

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += (+calcCount.value / 10);
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else { totalValue = 0; }

        const currentTotal = +total.textContent || 0;
        animateTotal(currentTotal, totalValue);
    }

    calcBlock.addEventListener('input', () => {
        countCalc()
    })
}

export default calculator