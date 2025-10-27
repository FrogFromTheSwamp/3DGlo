const validationCalculator = () => {
    const calculatorInput = document.querySelectorAll('.calc-block input');
    calculatorInput.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, "");
        })
    })
}

export default validationCalculator