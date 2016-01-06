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

	/* pop up */
	$('.popup-gallery').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
	    enabled: true,
	    navigateByImgClick: true,
	    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	  },
	  image: {
	    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	    titleSrc: function(item) {
	      return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
	    }
	  }
	});


	/* Owl Carousel */
 	$("#owl-carousel").owlCarousel({
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
	});

  // MAP
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 11,
          scrollwheel: false,
			    navigationControl: false,
			    mapTypeControl: false,
			    scaleControl: false,
			    draggable: false,

          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(25.035433, 121.566295), // New York

          // How you would like to style the map. 
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4f595d"},{"visibility":"on"}]}]
      };

      // Get the HTML DOM element that will contain your map 
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.6700, -73.9400),
          map: map,
          title: 'Snazzy!'
      });
  }

});


/* Menu */
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

	/*list js */
	var options = {
  valueNames: [ 'name']
	};

	var userList = new List('users', options);

})(jQuery);






/* Search */
(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();
