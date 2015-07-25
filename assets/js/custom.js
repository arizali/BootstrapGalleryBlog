      function truncText (text, maxLength){
var shortText = jQuery.trim(text).substring(0, maxLength)
    .split(" ").slice(0, -1).join(" ") + "...";
	return shortText;
      }
	  
	   $(window).load(function () {
        $(document).ready(function(){
				
	$(".minfo").each(function(){  
	var h = $(this).height();
	var t = (80 - h) / 2;
	if( t > 0) { 	$(this).css( 'margin-Top', t+'px'); }
});
			var h = $(window).height();
			$("#backgroundMain").height(h);
            collage();
            $('.Collage').collageCaption();
        });
    });


    // Here we apply the actual CollagePlus plugin
    function collage() {
        $('.Collage').removeWhitespace().collagePlus(
            {
                'fadeSpeed'     : 2000,
                'targetHeight'  : 200,
                'effect'        : 'effect-2',
                'direction'     : 'vertical'
            }
        );
    };

    // This is just for the case that the browser window is resized
    var resizeTimer = null;
    $(window).bind('resize', function() {
        // hide all the images until we resize them
        $('.Collage .Image_Wrapper').css("opacity", 0);
        // set a timer to re-apply the plugin
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(collage, 200);
    });

