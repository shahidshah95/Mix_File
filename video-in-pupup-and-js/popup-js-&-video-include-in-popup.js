
jQuery(document).ready(function () {
  jQuery('.mc__tab-content .video_icon').click(function () {
    var video_url = jQuery(this).data('video-url');
    jQuery('.mc__video').html('');
    jQuery('.mc__video').append('<video class="bf__video" width="320" height="240" autoplay controls><source src="'+video_url+'" type="video/mp4"></video>');
    jQuery(".close").click(function () {
      jQuery('video')[0].pause();
    });
  });
});

$(document).ready(function () {
  $('.video_popup').css('display', 'none');
  $('.video_icon').on('click', function () {
    $('.video_popup').css('display', 'block');
    $('body').addClass('mc_click');
  });
  $('span.close').on('click', function () {
    $('.video_popup').css('display', 'none');
    $('body').removeClass('mc_click');
  });

});
