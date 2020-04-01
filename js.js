window.addEventListener('DOMContentLoaded', function () {
    
    'use strict';

    // Создаем переменные, куда просвоим значения элементов с HTML-страницы
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    // Создаем функцию, которая будет скрывать все элементы со странице
    function hideTabContent (a) { // Объявляем функцию с именем hideTabContent и параметром а, это нужно для того, чтобы скрыть полностью все элементы.
        for (let i = a; i < tabContent.length; i++) { // С помощью цикла фор мы будем перебирать все элементы. Создаем переменную i и присваиваем ей параметр а, который мы передадим функции, когда ее вызовим. Указываем, что i будет не больше количество элементов из HTML с классом .info-tabcontent. После каждого прохода увеличиваем i на 1
            tabContent[i].classList.remove('show'); // В css свойствах прописали классы show и hide, первый отображает элементы из HTML с классом .info-tabcontent, а второй скрывает их. Делаем проверку, есть где-то есть класс show, удаляем его.
            tabContent[i].classList.add('hide'); // Добавляем элементам из HTML с классом .info-tabcontent класс hide
        }
    };
    hideTabContent(1); // Вызываем функцию и передаем ей параметр 1, чтобы отображался первый элемент, который под индексом 0

    //Функция, которая отображает контент.
    function showTabContent (b) { //Объявляем функцию с именем showTabContent и параметром b, это нужно для того, чтобы показать один элемент.
        if (tabContent[b].classList.contains('hide')) { // С помощью условия if проверяем есть ли у элементов из HTML с классом .info-tabcontent дополнительный класс hide, если есть то
            tabContent[b].classList.remove('hide'); // удаляем этот класс
            tabContent[b].classList.add('show'); // и добавляем класс show
        }
    };


    // Указываем, что необходимо следить за элементом и отслеживать событие клика в функцию передаем параметр информации клика(event)
    info.addEventListener('click', function (event) {
        let target = event.target; // Создаем переменную target, куда присваиваем значения клика и проверяем с помощью условий if

        if (target && target.classList.contains('info-header-tab')) { // С помощью if проверяем есть ли клик и был ли он совершен на дочерний элемента с классом info-header-tab, если да, то запускаем цикл for
            for (let i = 0; i < tab.length; i++) {// С помощью цикла for проверяем, чтобы на каждый .info-header-tab был свой .info-tabcontent. Создаем переменную, приравниваем ее к нулю. Указываем, что i будет не больше, чем параметров списка (4 штуки), i увеличиваем на 1
                if (target == tab[i]) { // если клик будет совершен на .info-header-tab с индексом i (от 0 до 3), запускаем функции
                    hideTabContent(0); // скрываем все элементы
                    showTabContent(i); // отображаем только тот, который подходит под описанию
                    break; // заканчивает цикл
                }
            }
        }
    });
});