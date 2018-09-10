$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= $('#start').height()) {
           var column1RelArray = $('#navlist li').map(function(){ 
                $(this).children().removeClass('text-white').addClass('text-dark').addClass('border-text');
            });
        }

        if ($(this).scrollTop() < $('#start').height()) {
           var column1RelArray = $('#navlist li').map(function(){ 
                $(this).children().removeClass('text-dark').removeClass('border-text').addClass('text-white');  
            });
        }
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


$(function(){
    $( "#sobre-1" ).hover(
      function() {
        $( "#sobre-1" ).removeClass('longe').addClass('zoom');
        $( "#sobre-2" ).addClass('desaparecer');
      }, function() {
        $( "#sobre-1" ).removeClass('zoom').addClass('longe');
        $( "#sobre-2" ).removeClass('desaparecer');
      }
    );
});