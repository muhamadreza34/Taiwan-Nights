$(document).ready(function(){
	/* ---- */
	/* FORM */
	/* ---- */
	$('.dropdowns')
	.click( 
		function() {
			$(this).children('ul').slideToggle(150);
			if ($(this).hasClass('open')) {
				$(this).removeClass('open');
				return false;
			} else {
				$(this).addClass('open');
				return false;
			}

			return false;
		})
	.hover( 
		function() {
		},
		function() {
			$(this).children('ul').slideUp(150);
			$(this).removeClass('open');
		});
	$('.dropdowns ul li')
	.click( 
		function() {
			var sitem = $(this).html();
			var sid = $(this).attr('id');
			$(this).siblings('li').removeClass('selected');
			$(this).addClass('selected');
			$(this).parent('ul').siblings('span.selected').html(sitem);
			$(this).parent('ul').siblings('input').val(sid);
		});

});


/* menu*/
(function() {

	var bodyEl = document.body,
		content = document.querySelector( 'body' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

