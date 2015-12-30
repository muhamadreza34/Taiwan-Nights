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