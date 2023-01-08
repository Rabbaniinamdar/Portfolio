
var menu = document.getElementById("menu");
var menu_toggel = document.getElementById("menu-toggle");
menu.addEventListener('click',function () {
  menu_toggel.classList.toggle("toggle");
  menu.classList.toggle("fa-times")
})


// $(document).ready(function(){

// $('#menu').click(function(){
//   $(this).toggleClass('fa-times');
//   $('header').toggleClass('toggle');
// });


// $(window).on('scroll load',function(){

//   $('#menu').removeClass('fa-times');
//   $('header').removeClass('toggle');

//   if($(window).scrollTop() > 0){
//     $('.top').show();
//   }else{
//     $('.top').hide();
//   }

// });

// // smooth scrolling 

// $('a[href*="#"]').on('click',function(e){

//   e.preventDefault();

//   $('html, body').animate({

//     scrollTop : $($(this).attr('href')).offset().top,

//   },
//     500, 
//     'linear'
//   );

// });

// });


const scriptURL = 'https://script.google.com/macros/s/AKfycbzO7P2_PbE1NYnW03FJ6HRi7VcvVu7CqWhDHGDUZRct0QO2Mg2ux_qf-b4gUJCXPp8A/exec'
const form = document.forms['submit-to-google-sheet']
var btnClear = document.querySelector('button');
var inputs = document.querySelectorAll('input');
var inputs_value = document.getElementById('email').value;
var textarea = document.querySelectorAll('textarea');
var form_status = document.getElementById('form_status');
console.log(inputs_value.value)
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response =>
      console.log('Success!', response)
    )
    .catch(error =>
      console.error('Error!', error.message))
  console.log(inputs_value)
  if (inputs.value == '') {
    console.log("submited")
    // form_status.textContent = "Your Response has been Recorded"
  }
  else {
    console.log("null")

    // form_status.textContent = "Please Enter Your Details"
  }
  inputs.forEach(input => input.value = '');
  textarea.forEach(textarea => textarea.value = '');
})