import timer from './modules/timer' // Таймер на главной странице, передаем в него дату завершения акции
import menu from './modules/menu' // Меню, которое раскрываается по щелчку на кнопку
import modal from './modules/modal' // Модальные окна с формой обратной связи
import validationCalculator from './modules/validationCalculator' // Проверка для калькулятора на ввод только цифр
import validationForm from './modules/validationForm' // Проверка формы обратной связи
import tabs from './modules/tabs' // Табы на странице
import slider from './modules/slider' // Слайдер на странице
import sliderCarausel from './modules/sliderCarausel' //Слайдер-карусель для партнеров
import calculator from './modules/calculator' // Калькулятор на странице

timer('31 october 2025'); // Передаём дату окончания акции
menu();
modal();
validationCalculator();
validationForm();
tabs();
slider();
sliderCarausel();
calculator(); // Можно передать стоимость за 1 кв. метр