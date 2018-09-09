$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


$(function () {
    $("#nav-button").click(function () {
        var $nav = $("#nav-main");
        var $nav2 = $(".navbar-fixed-top");
        if ($($nav).hasClass("collapse-background")) {
			$nav.removeClass('collapse-background');
			$nav2.height(70);
        }
        else{
        	$nav2.height(200);	
        	$nav.toggleClass('collapse-background');
        }
    });
});
 