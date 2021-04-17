var loopInterval = null;
    $(document).ready(function() {
    var i =0;
    init();
    function resetObjects(){
    $("*").clearQueue().stop();
    $("*").removeAttr("style");
    init();
    }

    function init(){
    clearInterval(loopInterval);
    if(i < 15)
    {



    $(".toolbox").delay(2000).animate({'bottom':'-100px'},1500);
    $(".tittle").delay(2000).animate({'opacity':'0'},1500);
    $(".stripe").delay(2000).animate({'top':'-78px'},1000);
    $(".right_spin,.corner_spin,.spin,.btm_spin").delay(2000).animate({'opacity':'0'},1000);
    $(".doc").delay(2000).animate({'top':'90px','left':'133px'},800,function(){
    $('.doc').animate({ 'deg': '0' },{duration: 1200,
    step: function(now) {
    $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }
    }
    );
    $(".docw").delay(5000).addClass('docscale');
    $(".ini").animate({'opacity':'1'},1000,function(){
    $(".right_spin").animate({'top':'20px','left':'140px','width':'25px','height':'25px','opacity':'1'},500,function(){
    $(".corner_spin").animate({'top':'17px','left':'150px','width':'60px','height':'60px','opacity':'1'},500,function(){
    $(".spin").animate({'top':'12px','left':'181px','width':'30','height':'30px','opacity':'1'},500,function(){
    $(".btm_spin").animate({'top':'3px','left':'186px','width':'30','height':'30px','opacity':'1'},500,function(){
    $(".spin_con").delay(1000).animate({'opacity':'0'},500,function(){
    $(".ini").animate({'opacity':'0'},500,function(){
    $(".docw").delay(5000).removeClass('docscale');
    $(".doc").animate({'top':'390px'},500,function(){
    $(".hand").animate({'top':'100px','opacity':'1'},500,function(){
    $(".handw").delay(5000).addClass('handscale');
    $(".spin_con").delay(2000).animate({'opacity':'1'},1000);
    $(".right_spin,.corner_spin,.spin,.btm_spin").delay(2000).animate({'opacity':'0'},10);
    $(".download").animate({'opacity':'1'},500,function(){
    $(".right_spin").animate({'top':'-43px','left':'145px','width':'60px','height':'60px','opacity':'1'},500,function(){
    $(".spin").animate({'top':'-40px','left':'138px','width':'35px','height':'35px','opacity':'1'},500,function(){
    $(".spin_con").delay(3000).animate({'opacity':'0'},1000);
    $(".download").delay(3000).animate({'opacity':'0'},500,function(){
    $(".handw").delay(5000).removeClass('handscale');
    $(".hand").animate({'top':'300px','opacity':'0'},500,function(){
    $(".edu_left").animate({'top':'100px','left':'18px','opacity':'1'},1000);
    $(".edu_right").animate({'top':'100px','right':'18px','opacity':'1'},1000);
    $(".edu_center").animate({'top':'100px','opacity':'1'},1000,function(){
    $(".spin_con").delay(1000).animate({'opacity':'1'},1000);
    $(".eduh").delay(5000).addClass('eduscale');
    $(".spin").animate({'opacity':'0'},1000);
    $(".right_spin").animate({'top':'-20px','left':'104px','opacity':'1','width':'80px','height':'80px'},1000,function(){
    $(".view").delay(2000).animate({'opacity':'1'},500,function(){
    $(".spin_con").delay(3000).animate({'opacity':'0'},1000);
    $(".view").delay(2000).animate({'opacity':'0'},500,function(){
    $(".edu_center").delay(1000).animate({'opacity':'0'},1000);
    $(".edu_right").delay(1000).animate({'opacity':'0'},1000);    
    $(".toolbox").delay(1000).animate({'bottom':'43px'},1500);
    $(".edu_left").delay(2000).animate({'top':'180px','left':'85px'},500,function(){
    $(".tittle").animate({'opacity':'1'},1500);
    $(".stripe").animate({'top':'0'},1000);
    $(".tittle").animate({'top':'60px'},500,function(){
    $(".toolbox").animate({'bottom':'96px'},1500);
    $(".edu_left").animate({'top':'123px'},1500);
    $(".stripe").animate({'top':'25px'},1500);
    $(".desc").delay(1000).animate({'opacity':'1'},1500,function(){
    $(".btn").fadeIn();
    if(i<15) {
    loopInterval = setInterval(resetObjects, 3500);
    }
    });
    });
    });
    });
    });    
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });


    }
    }

    });