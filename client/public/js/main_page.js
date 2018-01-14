$(document).ready(function(){
  $('#zodiac-form').on('submit', function (e){
    e.preventDefault();

    var zodiacUserObj = {
      name: $('#name-input').val(),
      birthdate: $('#birthdate-input').val()
    }
    console.log(zodiacUserObj);

    $.ajax({
      method:'POST',
      url:'/horoscope',
      dataType:'json',
      data: JSON.stringify(zodiacUserObj),
      contentType:'application/json'
    }).then(function(res){
      if (res === "blank_fields"){
        alert ('You must enter your name and birthdate to proceed')
      }
    });
    $('#name-input').val("");
    $('#birthdate-input').val("");

    
  });
})
