var config =
`function selectDate(date) {
  $('.calendar-wrapper').updateCalendarOptions({
    date: date
  });
}

var defaultConfig = {
  weekDayLength: 1,
  date: new Date(),
  onClickDate: selectDate,
  showYearDropdown: true,
  startOnSunday: true,
};

$('.calendar-wrapper').calendar(defaultConfig);`;
      eval(config);



$('.btn-outline-primary').click(function(){
    $('.btn-outline-primary').removeClass('active')
    $(this).addClass('active')
})


$('.gotoStep1').click(function(){
  $('.field').hide(100)
  $('.field1').show(100)
  $('.choose').addClass('active').addClass('linkable')
  $('.details').removeClass('active')
  $('.payment').removeClass('active')
  $('.finish').removeClass('active')
})
$('.gotoStep2').click(function(){
  $('.field').hide(100)
  $('.field2').show(100)
  $('.choose').addClass('active').addClass('linkable')
  $('.details').removeClass('active')
  $('.payment').removeClass('active')
  $('.finish').removeClass('active')
})
$('.gotoStep3').click(function(){
  $('.field').hide(100)
  $('.field3').show(100)
  $('.choose').removeClass('active')
  $('.details').addClass('active').addClass('linkable')
  $('.payment').removeClass('active')
  $('.finish').removeClass('active')
})
$('.gotoStep4').click(function(){
  $('.field').hide(100)
  $('.field4').show(100)
  $('.choose').removeClass('active')
  $('.details').addClass('active').addClass('linkable')
  $('.payment').removeClass('active')
  $('.finish').removeClass('active')
})
$('.gotoStep5').click(function(){
  $('.field').hide(100)
  $('.field5').show(100)
  $('.choose').removeClass('active')
  $('.details').removeClass('active')
  $('.payment').addClass('active').addClass('linkable')
  $('.finish').removeClass('active')
})
$('.gotoStep6').click(function(){
  $('.field').hide(100)
  $('.field6').show(100)
  $('.choose').removeClass('active')
  $('.details').removeClass('active')
  $('.payment').removeClass('active')
  $('.finish').addClass('active').addClass('linkable')
})
$('.gotoStep7').click(function(){
  $('.field').hide(100)
  $('.field7').show(100)
  $('.choose').removeClass('active')
  $('.details').addClass('active').addClass('linkable')
  $('.payment').removeClass('active')
  $('.finish').removeClass('active')
})




function incr1(){
  document.getElementById('numField1').stepUp()
}
function decr1(){
 document.getElementById('numField1').stepDown()
}

function incr2(){
  document.getElementById('numField2').stepUp()
}
function decr2(){
 document.getElementById('numField2').stepDown()
}

function incr3(){
  document.getElementById('numField3').stepUp()
}
function decr3(){
 document.getElementById('numField3').stepDown()
}

function incr4(){
  document.getElementById('numField4').stepUp()
}
function decr4(){
 document.getElementById('numField4').stepDown()
}


$('.choose.linkable a').click(function(event){
  event.preventDefault()
  $('.field').hide(100)
  $('.field1').show(100)
})

$('.details.linkable a').click(function(event){
  event.preventDefault()
  $('.field').hide(100)
  $('.field3').show(100)
})
$('.payment.linkable a').click(function(event){
  event.preventDefault()
  $('.field').hide(100)
  $('.field5').show(100)
})
$('.finish.linkable a').click(function(event){
  event.preventDefault()
  $('.field').hide(100)
  $('.field6').show(100)
})
$('.prev-button img').attr("src","img/arrow-left.png")
$('.next-button img').attr("src","img/arrow-right.png")