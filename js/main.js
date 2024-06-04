const navBtn = document.querySelector('.nav-icon-btn');
const icon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header_top-row');

navBtn.onclick = function(){
    icon.classList.toggle('nav-icon--active');

    nav.classList.toggle('header_top-row--mobile');

    document.body.classList.toggle('no-scroll');
}


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [51.610622, 46.004810],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
    });

    var myPlacemark = new ymaps.Placemark([51.610622, 46.004810], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/point.png',
        iconImageSize: [35, 45],
        iconImageOffset: [-20, -42]
    });

    myMap.geoObjects.add(myPlacemark);
    
}