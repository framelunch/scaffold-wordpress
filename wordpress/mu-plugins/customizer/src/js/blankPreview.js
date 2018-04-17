document.addEventListener('DOMContentLoaded', function () {
  var
    $view = [].slice.call(document.querySelectorAll('#the-list .view a'));

  for (var i = 0; i < $view.length; i++) {
    $view[i].target = '_blank';
  }

}, false);