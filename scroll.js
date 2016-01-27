function scrollToAnchor(aid){
    var aTag = $("main[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#scroll img").click(function() {
   scrollToAnchor('main_section');
   console.log('hai');
});