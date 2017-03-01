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

  $('.vine-list').mouseover(function() {
    $('.mask-1').css("background-color", "#00b488");
    $('body').addClass("vine");
    $('body').removeClass("facebook");
    $('body').removeClass("instagram");
    $('body').removeClass("twitter");
    $('body').removeClass("youtube");
    $('body').removeClass("tumblr");
    $('body').removeClass("snapchat");
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

  $('.nowthis-menu').mouseover(function() {
    $('.nowthis-arrow').css("display", "inline-block");
  });
  $('.nowthis-menu').mouseout(function() {
    $('.nowthis-arrow').css("display", "none");
  });

  $('.election-menu').mouseover(function() {
    $('.election-arrow').css("display", "inline-block");
  });
  $('.election-menu').mouseout(function() {
    $('.election-arrow').css("display", "none");
  });

  $('.booze-menu').mouseover(function() {
    $('.booze-arrow').css("display", "inline-block");
  });
  $('.booze-menu').mouseout(function() {
    $('.booze-arrow').css("display", "none");
  });

  $('.future-menu').mouseover(function() {
    $('.future-arrow').css("display", "inline-block");
  });
  $('.future-menu').mouseout(function() {
    $('.future-arrow').css("display", "none");
  });

  $('.entertainment-menu').mouseover(function() {
    $('.entertainment-arrow').css("display", "inline-block");
  });
  $('.entertainment-menu').mouseout(function() {
    $('.entertainment-arrow').css("display", "none");
  });

  $('.weed-menu').mouseover(function() {
    $('.weed-arrow').css("display", "inline-block");
  });
  $('.weed-menu').mouseout(function() {
    $('.weed-arrow').css("display", "none");
  });


  $('.nowthisnews-menu').mouseover(function() {
    $('.nowthisnews-arrow').css("display", "inline-block");
  });
  $('.nowthisnews-menu').mouseout(function() {
    $('.nowthisnews-arrow').css("display", "none");
  });

  $('.nowthisgif-menu').mouseover(function() {
    $('.nowthisteam-arrow').css("display", "inline-block");
  });
  $('.nowthisgif-menu').mouseout(function() {
    $('.nowthisteam-arrow').css("display", "none");
  });


  $('.instagram-menu').mouseover(function() {
    $('.instagram-arrow').css("display", "inline-block");
  });
  $('.instagram-menu').mouseout(function() {
    $('.instagram-arrow').css("display", "none");
  });

  $('.vine-menu').mouseover(function() {
    $('.vine-arrow').css("display", "inline-block");
  });
  $('.vine-menu').mouseout(function() {
    $('.vine-arrow').css("display", "none");
  });

  $('.tumblr-menu').mouseover(function() {
    $('.tumblr-arrow').css("display", "inline-block");
  });
  $('.tumblr-menu').mouseout(function() {
    $('.tumblr-arrow').css("display", "none");
  });

  $('.youtube-menu').mouseover(function() {
    $('.youtube-arrow').css("display", "inline-block");
  });
  $('.youtube-menu').mouseout(function() {
    $('.youtube-arrow').css("display", "none");
  });

  $('.snapchat-menu').mouseover(function() {
    $('.snapchat-arrow').css("display", "inline-block");
  });
  $('.snapchat-menu').mouseout(function() {
    $('.snapchat-arrow').css("display", "none");
  });

  $('.nowthis-menu').click(function() {
    window.open('https://www.facebook.com/NowThisNews', '_blank');
  });

  $('.election-menu').click(function() {
    window.open('https://www.facebook.com/NowThisElection', '_blank');
  });

  $('.booze-menu').click(function() {
    window.open('https://www.facebook.com/NowThisBooze', '_blank');
  });

  $('.future-menu').click(function() {
    window.open('https://www.facebook.com/NowThisFuture', '_blank');
  });

  $('.entertainment-menu').click(function() {
    window.open('https://www.facebook.com/NowThisEntertainment', '_blank');
  });

  $('.weed-menu').click(function() {
    window.open('https://www.facebook.com/NowThisWeed', '_blank');
  });

  $('.snapchat-list').click(function() {
    window.open('https://www.snapchat.com/discover/NowThis/8418913840', '_blank');
  });

  $('.nowthisnews-menu').click(function() {
    window.open('https://twitter.com/nowthisnews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eautho://twitter.com/nowthisnews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', '_blank');
  });

  $('.nowthisgif-menu').click(function() {
    window.open('https://twitter.com/nowthisgif', '_blank');
  });

  $('.instagram-list').click(function() {
    window.open('https://www.instagram.com/nowthisnews/?hl=en', '_blank');
  });

  $('.vine-list').click(function() {
    window.open('https://vine.co/nowthisnews', '_blank');
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
