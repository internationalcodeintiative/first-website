$(document).ready(function () {
  $('.column-1').mouseover(function() {
    $('.mask-1').css("background-color", "#061981");
    $('body').removeClass("twitter");
    $('body').removeClass("instagram");
    $('body').removeClass("vine");
    $('body').removeClass("tumblr");
    $('body').removeClass("youtube");
    $('body').removeClass("snapchat");
    $('body').removeClass("facebook");
  });

  $('.facebook-list').mouseover(function() {
    $('.mask-1').css("background-color", "#3b5998");
    $('body').removeClass("twitter");
    $('body').removeClass("instagram");
    $('body').removeClass("vine");
    $('body').removeClass("tumblr");
    $('body').removeClass("youtube");
    $('body').removeClass("snapchat");
    $('body').addClass("facebook");
  });

  $('.snapchat-list').mouseover(function() {
    $('.mask-1').css("background-color", "#fffc00");
    $('body').removeClass("twitter");
    $('body').removeClass("instagram");
    $('body').removeClass("vine");
    $('body').removeClass("tumblr");
    $('body').removeClass("youtube");
    $('body').removeClass("facebook");
    $('body').addClass("snapchat");
  });

  $('.twitter-list').mouseover(function() {
    $('.mask-1').css("background-color", "#4698FE");
    $('body').removeClass("facebook");
    $('body').removeClass("instagram");
    $('body').removeClass("vine");
    $('body').removeClass("tumblr");
    $('body').removeClass("youtube");
    $('body').removeClass("snapchat");
    $('body').addClass("twitter");
  });

  $('.instagram-list').mouseover(function() {
    $('.mask-1').css("background-color", "#3f729b");
    $('body').removeClass("facebook");
    $('body').removeClass("vine");
    $('body').addClass("instagram");
    $('body').removeClass("tumblr");
    $('body').removeClass("youtube");
    $('body').removeClass("snapchat");
    $('body').removeClass("twitter");
  });

  $('.tumblr-list').mouseover(function() {
    $('.mask-1').css("background-color", "#35465c");
    $('body').addClass("tumblr");
    $('body').removeClass("facebook");
    $('body').removeClass("instagram");
    $('body').removeClass("twitter");
    $('body').removeClass("youtube");
    $('body').removeClass("vine");
    $('body').removeClass("snapchat");
  });

  $('.youtube-list').mouseover(function() {
    $('.mask-1').css("background-color", "#cd201f");
    $('body').addClass("youtube");
    $('body').removeClass("facebook");
    $('body').removeClass("instagram");
    $('body').removeClass("twitter");
    $('body').removeClass("tumblr");
    $('body').removeClass("vine");
    $('body').removeClass("snapchat");
  });

  $('.nav-about').click(function() {
    window.location.href = 'about.html';
  });

  $('.nav-events').click(function() {
    window.location.href = 'events.html';
  });

  $('.facebook-list').click(function() {
    window.open('https://www.facebook.com/internationalcodeinitiative/', '_blank');
  });

  $('.snapchat-list').click(function() {
    window.open('https://www.snapchat.com/discover/NowThis/8418913840', '_blank');
  });

  $('.instagram-list').click(function() {
    window.open('https://www.instagram.com/nowthisnews/?hl=en', '_blank');
  });

  $('.tumblr-list').click(function() {
    window.open('http://nowthisnews.tumblr.com', '_blank');
  });

  $('.youtube-list').click(function() {
    window.open('https://www.youtube.com/user/nowthismedia', '_blank');
  });

  $('.mail-arrow').click(function() {
    $('.mail-arrow').css('rotate', '180deg');
  })
})
