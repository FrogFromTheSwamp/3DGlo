import timer from './modules/timer' // Таймер на главной странице, передаем в него дату завершения акции
import menu from './modules/menu' // Меню, которое раскрываается по щелчку на кнопку
import modal from './modules/modal' // Модальные окна с формой обратной связи
import validationCalculator from './modules/validationCalculator' // Проверка для калькулятора на ввод только цифр
import validationForm from './modules/validationForm' // Проверка формы обратной связи
import tabs from './modules/tabs' // Табы на странице

timer('30 october 2025');
menu()
modal()
validationCalculator()
validationForm()
tabs()