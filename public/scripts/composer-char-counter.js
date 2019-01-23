//says that i am using JQUERY on this file
$(function() {
  // need to implement a character counter that counts down the characters while the client types
  // need to access the textbox in the new tweet container
  // $('.text').on('input', function() {
  //   // need to say that while x is happening in the text box x is happening to char count
  //   // subrtract character limit from tweet count... reminaingCharacters = character limint - value inputed into form (.val())
  //   let charactersRemaining = 140 - $('.text').val().length;
  //   //this counts it down in the counter
  //   $('.counter').text(charactersRemaining);
  //   //this should work?
  //   if (charactersRemaining < 140) {
  //     $('.counter').css('color', 'red');
  //     // } else {
  //     //   $('span.counter').css('color', 'black');
  //   }
  // });
  // write logic that says if keystrokes happen <250 times return error
  //also produce red line under text when <250 characters occurs
  $('h2').css('color', 'pink');
});
