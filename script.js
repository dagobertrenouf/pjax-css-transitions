$(document).ready( function(){


});

$(document).pjax('#pjax-nav a', '#pjax-container', {
	fragment: "#pjax-container"
});

$(document).on('pjax:click', function(event) {
  
  console.log('pjax click!');

})

$(document).on('pjax:start', function(event) {
  
  console.log('pjax starts!');

});

$(document).on('pjax:end', function(event) {
  
  console.log('pjax ends!');

});

$(document).on('pjax:send', function(event) {

	console.log('request send');

});

$(document).on('pjax:complete', function(event) {

	console.log('request complete');

});

$(document).on('pjax:success', function(event) {

	console.log('request succeeds');

});

$(document).on('pjax:error', function(event) {
  
  console.log('pjax error');

});


$(document).on('pjax:timeout', function(event) {
  // Prevent default timeout redirection behavior
  event.preventDefault();
})