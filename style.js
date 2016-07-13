$(function(){

$("#style_editor").submit(function( event ) {
    event.preventDefault(); 

    selector = $("#selector").val();
    property = $("#property").val();
    valor = $("#value").val();
    console.log(selector);
    console.log(property);
    console.log(valor);

  $(selector).css(property, valor);
  });

});

