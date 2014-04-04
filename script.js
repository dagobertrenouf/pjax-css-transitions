$(document).ready( function(){


});

$(document).pjax('nav a', 'article.container');

$(document).on('pjax:start', function(event) {
  
  console.log('pjax!');

})