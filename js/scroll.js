$("#scroll img")
    .off("click")
    .on("click", function() {
    	console.log('hai');
        var scrollHeight = $("#header")[0].scrollHeight === 82 ? (82 + $("#signup_top_banner")[0].scrollHeight) : ($(window).height() - $("#header")[0].scrollHeight);
        scrollHeight -= 30; //top padding for section_1
        if (window.matchMedia("screen and (max-width: 620px)").matches) {
            scrollHeight = $("#header")[0].scrollHeight + $("#signup_top_banner")[0].scrollHeight - 30;
        }
        $('html, body').animate({
            scrollTop: parseInt(scrollHeight)
        }, 500);
    });
