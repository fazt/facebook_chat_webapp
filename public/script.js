$(function () {
  $('.chat-head').click(function () {
    $('.chat-body').slideToggle('slow');
  });
  $('.msg-head').click(function () {
    $('.msg-wrapper').slideToggle('slow');
  });

  $('.close').click(function () {
    $('.msg-box').hide();
  });

  $('.user').click(function () {
    $('.msg-wrapper').show();
    $('.msg-box').show();
  });

  $('textarea').keypress(function (e) {
    if (e.keyCode === 13) {
      var msg = $(this).val();
      $(this).val('');
      $('<div class="msg-b">'+msg+'</div>').insertBefore('.msg-insert');
      $('.msg-body').scrollTop($('.msg-body')[0].scrollHeight);
    }
  });
});
