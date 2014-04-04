var containerClass = '#pjax-container';
var container = $(containerClass);
var cloneClass = 'clone';
var transitionClass = 'fade';

$(document).pjax('#pjax-nav a', container, {

	fragment: containerClass

});

$(document).on('pjax:start', function(event) {
  
	console.log('pjax starts!');

	container.clone().insertAfter(container).addClass(cloneClass); // duplicates content and put it right above container (through position absolute and z-index)

});

$(document).on('pjax:send', function(event) {

	console.log('pjax sends request!');

	setTimeout(function(){ // add transition class that makes clone disappear on top of new content
		$('.' + cloneClass).addClass(transitionClass);
	}, 50); // adding 1ms delay to ensure proper firing of css transition

	// once transition is complete, remove the clone element
	$('.' + cloneClass).bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){

		$('.' + cloneClass).remove();

	});

});




// $(document).on('pjax:success', function(event) {

// 	console.log('request succeeds');

// });

// $(document).on('pjax:end', function(event) {
  
// 	console.log('pjax ends!');

// 	setTimeout(function(){
// 		$('.' + cloneClass).removeClass(cloneClass);
// 	}, 1000);

// });

// $(document).on('pjax:click', function(event) {
  
//   console.log('pjax click!');

// })

// $(document).on('pjax:send', function(event) {

// 	console.log('request send');

// });

// $(document).on('pjax:complete', function(event) {

// 	console.log('request complete');

// });

// $(document).on('pjax:error', function(event) {
  
//   console.log('pjax error');

// });

// $(document).on('pjax:timeout', function(event) {

//   // Prevent default timeout redirection behavior
//   //event.preventDefault();

// })