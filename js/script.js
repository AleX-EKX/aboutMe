$(function(){
    $('.cheking').on('click',function(){
        $('.container-popup').css('display','flex');
    });

    $('.close-button').on('click', function(){
        $('.container-popup').css('display','none');
    });
});

$(function(){
    $('.portfolio-one').on('click',function(){
        $('.container-video').css('display','flex');
        $('.video-one').css('display','block');
        $('.video-two').css('display','none');
        $('.video-three').css('display','none');
    });
    $('.portfolio-two').on('click',function(){
        $('.container-video').css('display','flex');
        $('.video-two').css('display','block');
        $('.video-one').css('display','none');
        $('.video-three').css('display','none');
    });
    $('.portfolio-three').on('click',function(){
        $('.container-video').css('display','flex');
        $('.video-three').css('display','block');
        $('.video-one').css('display','none');
        $('.video-two').css('display','none');
    });
    $('.close-button').on('click',function(){
        $('.container-video').css('display','none');
    });
});

$(function(){
    $('.close-button').on('click',function(){
        $('.navbar').css('display','none');
    });
});

