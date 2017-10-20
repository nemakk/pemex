$(document).ready(function(){
     $('.parallax').parallax();
     $('select').material_select();

     $('#finalButton').on('click', function(){
       console.log('g');
      $('#final').show('slow');
    });
 });

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });


  $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

 var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 0,
     'max': 100
   },
   format: wNumb({
     decimals: 0
   })
  });


  var act1 = getElementById('act1').value
  var act2 = getElementById('act2').value
  var act3 = getElementById('act3').value
  var act4 = getElementById('act4').value
  var act5 = getElementById('act5').value

  var frec1 = getElementById('frec1').value
  var frec2 = getElementById('frec2').value
  var frec3 = getElementById('frec3').value
  var frec4 = getElementById('frec4').value
  var frec5 = getElementById('frec5').value

  var resultPar= (act1*frec1) + (act2*frec2) + (act3*frec3) + (act4*frec4) + (act5*frec5)


  function plazas() {

    resultado=resultPar/133025
    document.getElementById('resultPlazas').innerHTML = resultado;

  }
