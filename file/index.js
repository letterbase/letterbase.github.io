/*
  INDEX.JS
*/

$(function(){
  $('body').append('<div id="topleft">GITHUB源码</div>')
  $('body').append('<div id="topbar"></div>')
  $('body').append('<div id="sidebar"></div>');
  $('body').append('<div id="content"></div>');

  if ($('html').attr('el-type') === 'status-404') {
    $('#content').append('<h1 align="center">对不起</h1>')
    $('#content').append('<h5 align="center">你的页面不存在！</h1>')
    $('#content').append('<span align="center">如果你有<b>github</b>的话，请<a href="https://github.com/letterbase/letterbase.github.io/">编辑</a>页面</span>')
    return;
  }
})
