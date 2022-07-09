//= require_tree .

$(document).ready(function(){
  $('.carousel').carousel();
  $('.issue-gallery a').magnificPopup({
    type: 'image',
    gallery: {
      enabled:true
    }
  });
});