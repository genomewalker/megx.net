// fix navbar on top while scrolling
$(function() {
    $('#nav-wrapper').height($("#nav").height());
    
    $('#nav').affix({
        offset: { top: $('#nav').offset().top }
    });
});