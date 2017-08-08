/* ---------------------------------------------------- */
/*	Background size screen								*/
/* ---------------------------------------------------- */

if ($('.hero').length) {

	    	$(window).on('load resize',function(){
		        $('.hero').css('height', window.innerHeight+'px');
		    });

	    }
