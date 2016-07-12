function formatTime(time) {
  time = Date.parse(time);
  let date = new Date(),
    now = date.getTime(),
    diff = parseInt((now - time) / 1000),
    str = '';

  if (!diff) return;

  if (diff < 60) {
    str = diff + ' 秒前';
  }
  else if (diff >= 60 && diff < 3600) {
    str = parseInt(diff / 60 ) + ' 分前';
  }
  else if (diff >= 3600 && diff < (3600 * 24) ) {
    str = parseInt(diff / 3600) + ' 小时前';
  }
  else if (diff >= (3600 * 24) && diff < (3600 * 24 * 30)) {
    str = parseInt(diff / (3600 * 24)) + ' 天前';
  }
  else if (diff >= (3600 * 24 * 30) && diff < (3600 * 24 * 365)) {
    str = parseInt(diff / (3600 * 24 * 30)) + ' 月前';
  }
  else if (diff >= (3600 * 24 * 365)) {
    str = parseInt(diff / (3600 * 24 * 365)) + ' 年前';
  }
  return str;
}


var module = angular.module('app.filters');
module.filter('timeFormat',function(){
  return function(time){
    return formatTime(time);
  }
});