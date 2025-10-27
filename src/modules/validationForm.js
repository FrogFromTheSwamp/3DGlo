const validationForm = () => {
    const formName = document.querySelectorAll('.form-name');
    const formEmail = document.querySelectorAll('.form-email');
    const formPhone = document.querySelectorAll('.form-phone');
    const formMes = document.querySelectorAll('.mess');

    formName.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^А-Яа-яЁё\s-]/g, "")
        })
    })

    formMes.forEach(item => {
        item.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^А-Яа-яЁё\s-]/g, "")
        })
    })

    formEmail.forEach(item => {
        item.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']/g, "")
        })
    })

    formPhone.forEach(item => {
        item.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^\d()\-\s]/g, "")
        })
    })
}

export default validationForm