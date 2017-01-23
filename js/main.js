// data
var hpy_song = {
  para_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also into the electronic typesetting, remaining essentially',
  chorus_title: 'Chorus:',
  chorus_text: 'was popularised in the 1960s the  release of Letraset sheets containing Lorem Ipsum pass, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

// insert data for HPY song
$("#para-1 p").append(hpy_song.para_1.toUpperCase());
$("#chorus-1 .chorus-title p, #chorus-2 .chorus-title p").append(hpy_song.chorus_title.toUpperCase());
$("#chorus-1 .chorus-text p, #chorus-2 .chorus-text p").append(hpy_song.chorus_text.toUpperCase());

// trigger jQuery for menu
$(document).ready(function () {
  // css styling for active menu
  $('#main-menu li').on('click', function() {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });
});

// carousel timer
$('.carousel').carousel({
  interval: 3500
})
