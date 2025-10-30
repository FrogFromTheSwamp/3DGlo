import { animate } from "./helpers";

const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = calcBlock.querySelector('.calc-type');
    const calcSquare = calcBlock.querySelector('.calc-square');
    const calcCount = calcBlock.querySelector('.calc-count');
    const calcDay = calcBlock.querySelector('.calc-day');
    const total = calcBlock.querySelector('#total');

    const animateTotal = (element, start, end, duration = 500) => {
        animate({ duration,
                timing(timeFraction) {
                    return timeFraction; // линейная анимация
                },
                draw(progress) {
                    const current = Math.round(start + (end - start) * progress);
                    element.textContent = current;
                }
        });
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
        
        // Анимация
        const currentTotal = +total.textContent || 0;
        animateTotal(total, currentTotal, totalValue, 300);
    }

    calcBlock.addEventListener('input', () => {
        countCalc()
    })
}

export default calculator