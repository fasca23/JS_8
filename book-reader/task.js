let bookFontSizeControl = [...document.querySelectorAll('.font-size')];
let bookColorControl = [...document.querySelectorAll('.color')];
let book = document.querySelector('.book');
let fontSizeBlock = document.querySelector(".book__control_font-size");
let colorBlock = document.querySelector(".book__control_color");
let backgroundBlock = document.querySelector(".book__control_background");
let index;

// Общее поведение при изменении цвета
function changeColor(parameter){

    let whiteColor = "-white";

    // Подстраиваем код под значение в html документе, чтоб использовать общую функцию и не менять html
    if(parameter === "color"){
        whiteColor += "smoke";
    }
    // через индексы, полученные ранее, объединяем код сразу для двух групп кнопок с разным функционалом
    if (index === 0 || index === 3){
        book.classList.remove("book_"+parameter+"-gray");
        book.classList.remove("book_"+parameter+whiteColor);
        book.classList.add("book_"+parameter+"-black");
    }
    if (index === 1 || index === 4){
        book.classList.remove("book_"+parameter+"-black");
        book.classList.remove("book_"+parameter+whiteColor);
        book.classList.add("book_"+parameter+"-gray");
    }
    if(index === 2|| index === 5){
        book.classList.remove("book_"+parameter+"-black");
        book.classList.remove("book_"+parameter+"-gray");
        book.classList.add("book_"+parameter+whiteColor);
    }
}

// нажатие на увеличение текста
fontSizeBlock.addEventListener('click', e => {
    // определяемся с нажатой кнопкой
    let menu = e.target.closest(".font-size");
    if(menu){
            e.preventDefault();
            if (!(menu.querySelector(".font-size_active"))) {
                index = bookFontSizeControl.indexOf(menu);
                bookFontSizeControl.forEach(elMenu => elMenu.classList.remove("font-size_active"));
                menu.classList.add("font-size_active");
                // уменьшаем текст
                if (index === 0){
                    book.classList.remove("book_fs-big");
                    book.classList.add("book_fs-small");
                }
                // сбрасываем все изменения размера текста
                if (index === 1){
                    book.classList.remove("book_fs-big");
                    book.classList.remove("book_fs-small");
                }
                // увеличиваем текст
                if(index === 2){
                    book.classList.add("book_fs-big");
                    book.classList.remove("book_fs-small");
                }
            }
        }});

// Нажатие на изменение цвета текста
colorBlock.addEventListener('click', e => {
    let menu = e.target.closest(".color");
    if(menu){
        // Отменяем стандартное действие браузера
        e.preventDefault();
        // реагируем только на не активную кнопку
        if (!(menu.querySelector(".color_active"))) {
            // определяем индекс нажатой кнопки
            index = bookColorControl.indexOf(menu);
            // находим и удаляем активность с пункта меню
            bookColorControl.forEach(elMenu => elMenu.classList.remove("color_active"));
            // ставим активность на текущий пункт меню
            menu.classList.add("color_active");
            // запускаем логику
            changeColor("color");
        }
    }});

// Тоже, но нажатие отправляем уже на изменение цвета фона
backgroundBlock.addEventListener('click', e => {
    let menu = e.target.closest(".color");
    if(menu){
        e.preventDefault();
        if (!(menu.querySelector(".color_active"))) {
            index = bookColorControl.indexOf(menu);
            bookColorControl.forEach(elMenu => elMenu.classList.remove("color_active"));
            menu.classList.add("color_active");
            changeColor("bg");
        }
    }});