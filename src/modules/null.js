const printConsole = () => {
    const date = new Date;
    const dateNewYear = new Date(2025, 11, 31);
    const deadlineDay = Math.floor((dateNewYear.getTime() - date.getTime()) / 1000 / 60 / 60 / 24)

    let greet;
    let timeEN;
    if (date.getHours() >= 6 && date.getHours() <= 12) { greet = 'Доброе утро!'; timeEN = 'AM'; }
    else if (date.getHours() > 12 && date.getHours() < 18) { greet = 'Добрый день!'; timeEN = 'AM'; }
    else if (date.getHours()>= 18 && date.getHours() < 1 ) { greet = 'Добрый вечер!'; timeEN = 'PM'; }
    else if (date.getHours() >= 1 && date.getHours() < 6) { greet = 'Доброй ночи!'; timeEN = 'PM'; }

    let day = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
    console.log(greet);
    console.log(`Сегодня: ${day[date.getDay()]}`);
    console.log(`Текущее время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${timeEN}`);
    console.log(`До Нового года осталось ${deadlineDay} дней`)

}

export default printConsole;
