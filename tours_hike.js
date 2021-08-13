


/*
თუ დაკლიკავ ტურს აჩვენოს მხოლოდ ტურები
თუ დაკლიკავ ლაშქრობები აჩვენოს მხოლოდ ლაშქრობები
თუ დაკლიკავ ორივეს აჩვენოს ორივე
*/

$(function(){
    $('.choice').change(function() {
        if ($(this).val() == "tour") {
          $('.cardtour').css('display', "block")
          $('.cardhike' ).css('display', "none")
      }
        else if ($(this).val() == "hike") {
          $('.cardtour'  ).css('display', "none")
          $('.cardhike' ).css('display', "block")
      }
      else {
        $('.cardtour'  ).css('display', "block")
        $('.cardhike' ).css('display', "block")
      }
    });
});
