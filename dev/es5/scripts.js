"use strict";
(function (){
    setTimeout(function () {
        sliderSatar()
    },22000);
    function sliderSatar() {
        $('#slider').nivoSlider({
            effect: 'fold' ,
            controlNav: true,
            pauseTime: 5000,
            pauseOnHover: false
        });
    }

    // variables globales
    var menu =  $('#menu'),
        iconresp = $('#nav'),
        year = $('#year'),
        numte = $('.telefono'),
        ancho = $(window).width();

    if (ancho > 768){
        numte.removeAttr('href')
    }
    console.log(numte+"/"+ancho);

    //llamada a funciones
    //aside();
    tabs();

    // obtener año
    year.html('&copy ' + new Date().getFullYear() + ' ');

    //// variables de funciones
    var menuslide = function(){
        menu.slideToggle();
    };

    ////eventos
    iconresp.on('click', menuslide);



})();

function tabs() {
    var linksParent = $('.tabs__links');
    var links = linksParent.find('a');
    var items = $('.tabs__contents__item');
    links.eq(0).add(items.eq(0)).addClass('active');
    linksParent.on('click', 'a', function () {
        var t = $(this);
        var i = t.index();
        t.add(items.eq(i))
            .addClass('active')
            .siblings().removeClass('active');
    });
}
(function aside(){
    var $contacto = $('#contacto'),
        $aside = $('#aside');
    if (contacto){
        var rs = $('.redes-container');
        $aside.hide();
        rs.removeClass('web-40')
    }
})();
//(function telef(){
//    var numerost = $('.telefono'),
//        ancho = $(window).width();
//    numerost.on('click',a, function(e){
//        console.log(numerost);
//    });
//})();