const sendForm = ({ idForm, someElem = [] }) => {
    const form = document.getElementById(idForm);

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется :)';
    const errorText = 'Ошибка отправки данных :(';

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = document.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        })

        sendData(formBody)
        .then(data => {
            console.log(data)

            formElements.forEach(elem => {
                elem.value = ''
            })

            statusBlock.textContent = successText;
        })
        .catch(() => {
            statusBlock.textContent = errorText;
        })

    }

    try {
        if (!form) {
            throw new Error('Верните форму обратно!!!!!')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm()
        })
    } catch(error) {
        console.error(error.message)
    }
}

export default sendForm