var $j = jQuery.noConflict();
(function ($j) {

  Drupal.behaviors.disque_inline = {
    attach: function (context, settings) {
    disqus_shortname = 'MyLocalhost';

				$j("p").inlineDisqussions({
					identifier: 'disqussion',
					displayCount: true,
					highlighted: false,
					position: 'right',
					background: '#fff',
					maxWidth: 9999
				});

			var $slidewidth;	// Shift page content ('body') to the left
			var $viewportW = $j(window).width();
			var $rmode = true;

			// Test if Screen Size is Small enough and if Responsive Mode is activated
			if ( ( $viewportW < 860 ) && ( $rmode == true ) ) {
				$slidewidth = "70%";
				activate_rmode($slidewidth);
			}
			else if ( ( $viewportW < 980 ) && ( $rmode == true ) ) {
				$slidewidth = "55%";
				activate_rmode($slidewidth);
			}
			else if ( ( $viewportW < 1200 ) && ( $rmode == true ) ) {
				$slidewidth = "40%";
				activate_rmode($slidewidth);
			}

             var activate_rmode($slidewidth = function(){
			//function activate_rmode($slidewidth) {
				var $tvar = 0;
				if ( $tvar = 0 ) {
					$ind('a.disqussion-link').click(
					function movecontent(){
						//<?php if (get_option("select_align") == "right") { ?>
							$j('body').css( { "position" : "relative", "right" : $slidewidth  } );
						//<?php } else { ?>
						//	$ind('body').css( { "position" : "relative", "left" : $slidewidth  } );
						//<?php } ?>
						$tvar = 1;
					});
				}
				else if ( $tvar = 1 ) {
					$ind('a.disqussion-link').click(
					function movecontent(){
						//<?php if (get_option("select_align") == "right") { ?>
							$j('body').css( { "position" : "relative", "left" : "initial", "right" : $slidewidth  } );
						//<?php } else { ?>
							//$ind('body').css( { "position" : "relative", "right" : "initial", "left" : $slidewidth  } );
						//<?php } ?>
						$tvar = 0;
					});	
				}
			}


  };

})(jQuery);
