// elements declaration
var navEltsClass = '#pjax-nav a';
var navElts = $(navEltsClass);
var curNavEltId = '';

var containerClass = '#pjax-container';
var container = $(containerClass);

var cloneClass = 'clone';
var transitionClass = 'fade';

// initiating pjax
$(document).pjax(navEltsClass, container, {

	// what part of html file we should get
	fragment: containerClass 

});

$(document).on('pjax:start', function(event) {
  
	console.log('pjax starts!');

	curNavEltId = event.relatedTarget.id;

	disableNav();

	container.clone().insertAfter(container).addClass(cloneClass); // duplicates content and put it right above container for disappearance effect (through position absolute and z-index)

});

$(document).on('pjax:success', function(event) {

	console.log('pjax success');

	setTimeout(function(){ // add transition class that starts visual transition
		
		console.log('transition starts');
		
		$('.' + cloneClass).addClass(transitionClass);

	}, 50); // adding 50ms delay to ensure proper firing of css transition

	// once transition is complete, remove the clone element
	$('.' + cloneClass).bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){

		console.log('transition ends');

		$('.' + cloneClass).remove();

		reactivateNav();

	});

});


// disable nav links
function disableNav(){

	// should disable pjax on these altogether, maybe rename the class?
	navElts.each(function(){

		$(this).attr('data-url', $(this).attr('href'));
		$(this).removeAttr('href');
		navActive = false;

	})

}
// reactivate nav links
function reactivateNav(){

	navElts.each(function(){

		$(this).attr('href', $(this).attr('data-url'));
		$(this).removeAttr('data-url');
		navActive = true;

	});

	if(curNavEltId != ''){
	
		markActiveNav(curNavEltId);

	}

}

// add active class to nav element
function markActiveNav(eltId){

	navElts.removeClass('active');
    
    $("#"+eltId).addClass('active');

}


// custom navigation styling
// if ($.support.pjax) {
  
// 	$(document).on('click', navEltsClass, function(event) {

// 		console.log(navActive);
// 		curNavElt = $(this);

// 	});

// }


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