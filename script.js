var count = 1;

$('#hamburger').click(function () {
    $(this).prev().stop().slideToggle('fast');
});
if ($(window).outerWidth() < 760) {
    $('#navBar').css('display', 'none');
    $('.information').before($('.portrait'));

$('.photos').click(function(){
    count = (count)%4 + 1; 
    $('.photos:not(.photos:nth-child('+count+'))').css('display','none');
    $('.photos:nth-child('+count+')').css('display','inline-block');
});
}

$(window).resize(function (event) {
    if ($(window).outerWidth() >= 760) {
        $('#navBar').css('display', 'block');
        $('.information').after($('.portrait'));
        $('.photos').css('display','inline-block');
    }
    if ($(window).outerWidth() < 760) {
        // $('.photos:not(.photos:nth-child('+count+'))').css('display','none');
        // $('.photos:nth-child('+count+')').css('display','inline-block');
        $('#navBar').css('display', 'none');
        $('.information').before($('.portrait'));

                $('.photos').click(function(){
            count = (count)%4 + 1; 
            $('.photos:not(.photos:nth-child('+count+'))').css('display','none');
            $('.photos:nth-child('+count+')').css('display','inline-block');
        });
                
    }
    
});

$('.image-holder').hover(function () {
    $(this).find('span').fadeIn('fast');
    $(this).find('div').fadeIn('fast');

}, function () {
    $(this).find('span', 'div').fadeOut('fast');
    $(this).find('div').fadeOut('fast');
})
$('.progress').each(function () {
    var widthValue = $(this).attr('val');
    $(this).css('width', widthValue);
    $(this).text(widthValue);
});

$("#call").click(function () {
    var textToCopy = $("#call").attr('num');
    textToCopy.select();
    document.execCommand("copy");
    alert("Text copied to clipboard");
});
