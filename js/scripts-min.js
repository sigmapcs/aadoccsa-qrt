(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
  sliderSatar(); // setTimeout(function () {
  // },1);

  function sliderSatar() {
    $('#slider').nivoSlider({
      effect: 'fold',
      controlNav: true,
      pauseTime: 5000,
      pauseOnHover: false
    });
  } // variables globales


  var menu = $('#menu'),
      iconresp = $('#nav'),
      year = $('#year'),
      numte = $('.telefono'),
      ancho = $(window).width();

  if (ancho > 768) {
    numte.removeAttr('href');
  }

  console.log(numte + "/" + ancho); //llamada a funciones
  //aside();

  tabs(); // obtener año

  year.html('&copy ' + new Date().getFullYear() + ' '); //// variables de funciones

  var menuslide = function menuslide() {
    menu.slideToggle();
  }; ////eventos


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
    t.add(items.eq(i)).addClass('active').siblings().removeClass('active');
  });
} // (function aside(){
//     var $contacto = $('#contacto')
//         $aside = $('#aside');
//     if (contacto){
//         var rs = $('.redes-container');
//         $aside.hide();
//         rs.removeClass('web-40')
//     }
// })();
//(function telef(){
//    var numerost = $('.telefono'),
//        ancho = $(window).width();
//    numerost.on('click',a, function(e){
//        console.log(numerost);
//    });
//})();


if ($('#one')) {
  (function () {
    var one = $('#one'),
        two = $('#two'),
        products = $('.imagenes-prod'),
        hide = $('.hide');
    one.on('click', function () {
      // alert('hola')
      var t = $(this);
      t.hide();
      products.show();
    });
    two.on('click', function () {
      // alert('hola')
      var t = $(this);
      t.hide();
      hide.show();
    });
  })();
}

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
