let rotator = [...document.querySelectorAll(".rotator__case")];
// Индекс активного
let index = rotator.indexOf(document.querySelector(".rotator__case_active"));

// преобразуем параметр атрибута по индексу в число 
let delay = parseInt(rotator[index].getAttribute("data-speed"));

let interval;

function showCase (){
        rotator[index].classList.remove("rotator__case_active");
        // задаем возврат в начало через переключения последнего на первый и сокращаем запись используя тернарный оператор
        (index === rotator.length-1 ? index = 0 : ++index);
        // получаем значение времени задержки
        delay = parseInt(rotator[index].getAttribute("data-speed"));
        // console.log(delay);
        // выставляем цвет
        rotator[index].style.color = rotator[index].getAttribute("data-color");
        // добавляем активность
        rotator[index].classList.add("rotator__case_active");
        // заменяем таймер на новый
        clearInterval(interval);
        // запускаем с таймером
        interval = setInterval(showCase, delay);
}

showCase ();