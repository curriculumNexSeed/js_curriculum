$(function(){
  //ボタンのサイズ変更
  $('#js-click-btn').on('click', function() {
    $(this).addClass('large-btn');
  });

  //ボタンの色変更
  $('#js-hover-btn').mouseover(function() {
    $(this).addClass('hoge');
  }).mouseleave(function() {
    $(this).removeClass('hoge');
  });

  //要素の表示切り替え
  $('#js-show-btn').on('click', function() {
    $('#js-target-element').fadeIn(1000);
  });

  $('#js-hide-btn').on('click', function() {
    $('#js-target-element').fadeOut(2000);
  });

  //要素の追加
  // 要素の前後(外)に追加
  $('#js-add-btn').on('click', function() {
    $(this).before('<li class="btn">ボタンの前に追加</li>');
    $(this).after('<li class="btn">ボタンの後ろに追加</li>');
  });

  //要素の前後(中)に追加
  $('#js-add-btn2').on('click', function() {
    $(this).prepend('<li>前</li>');
    $(this).append('<li>後</li>');
  });

});
