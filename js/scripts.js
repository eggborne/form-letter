
$(document).ready(function(){
  $("form#form-1").submit(function(event) {
    var nameInput = $("input#input-name").val();
    console.log("typed  " + nameInput);
    $('#output').prepend("Dear " + nameInput + ",<p></p>");
    $('#output').css({
      'transform' : 'scaleX(1) scaleY(1)',
      'opacity' : '1'
    })
    event.preventDefault();
  });
  var actualLetterWidth = $('#output').width()
  $('#output').css({
    'font-size':(actualLetterWidth*0.03)
  })
  $(window).resize(function(){
    var actualLetterWidth = $('#output').width()
    $('#output').css({
      'font-size':(actualLetterWidth*0.03)
    })
  })
  // window.addEventListener('orientationchange',function(){
  //   var actualLetterWidth = $('#output').width()
  //   $('#output').css({
  //     'font-size':(actualLetterWidth*0.03)
  //   })
  // })

})
