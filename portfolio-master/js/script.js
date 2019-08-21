
$(document).ready(function () {
    let $title1 = $("#title1");
    let $title2 = $("#title2");
    let $title3 = $("#title3");
    let $title4 = $("#title4");
    let $buttonNext = $(".next");

    //title loading animation
    $title1.animate({
        left: "0"
    });
    $title2.delay(100).animate({
        left: "0"
    });
    $title3.delay(200).animate({
        left: "0"
    });
    $title4.delay(300).animate({
        left: "0"
    });
    $buttonNext.animate({opacity: "1"},700);

    //set varying width
    let width = $(window).width();

    if(width > 880){
        document.documentElement.style.setProperty('--width', '880px');
    }
    else{
        width-= 100;
        document.documentElement.style.setProperty('--width', width + 'px');
    }
    if(width > 700){
        document.documentElement.style.setProperty('--sWidth', '700px');
    }
    else{
        width-= 100;
        document.documentElement.style.setProperty('--sWidth', width + 'px');
    }

});

$(".next").click(function () {
    let $buttonSwitch = this.id;
    let $titleSec = $(".title-section");
    let $introSec = $(".intro-section");
    let $skillSec = $(".skill-section");
    let $titleCard = $(".title-card");
    let $introCard = $(".intro-card");
    let $skillCard = $(".skill-card");

    //switch page animations
    //title - intro switch
    if ($buttonSwitch === 'title-intro'){
        $introSec.animate({
            left: "0"
        }, "linear");
        $titleCard.animate({
            opacity: "0"
        });
        $introCard.animate({
            opacity: "1"
        });
    }
    //title - skill switch
    else if ($buttonSwitch === 'title-skill'){
        $skillSec.animate({
            left: "0"
        }, "linear");
        $titleCard.animate({
            opacity: "0"
        });
        $skillCard.animate({
            opacity: "1"
        });
    }
    //intro - title switch
    else if ($buttonSwitch === 'intro'){
        $introSec.animate({
            left: "-100%"
        }, "linear");
        $introCard.animate({
            opacity: "0"
        });
        $titleCard.animate({
            opacity: "1"
        });
    }
    //skill - title switch
    else if ($buttonSwitch === 'skill'){
        $skillSec.animate({
            left: "100%"
        }, "linear");
        $skillCard.animate({
            opacity: "0"
        });
        $titleCard.animate({
            opacity: "1"
        });
    }
});

$(window).on("resize", function () {
    let width = $(window).width();
    //set widths on resize
    if(width > 880){
        document.documentElement.style.setProperty('--width', '880px');
    }
    else{
        document.documentElement.style.setProperty('--width', width + 'px');
    }
    if(width > 700){
        document.documentElement.style.setProperty('--sWidth', '700px');
    }
    else{
        width-= 100;
        document.documentElement.style.setProperty('--sWidth', width + 'px');
    }
});

$(".tabSwitch").click(function () {
    let buttonSwitch = this.id;
    let $introText = $(".intro-text");
    let $introCont = $(".intro-contact");

    //switch between contact and about animations
    //about
    if (buttonSwitch === 'intro-text'){
        $introText.delay(200).animate({
            opacity: '1',
            zIndex: '3'
        },100);
        $introCont.animate({
            opacity: '0',
            zIndex: '-3'
        });
    }
    //contact
    else if (buttonSwitch === 'intro-cont'){
        $introText.animate({
            opacity: '0',
            zIndex: '-3'
        },300);
        $introCont.delay(200).animate({
            opacity: '1',
            zIndex: '3'
        },100);
    }
});

$(".skill-img").click(function () {
    let $button = this.id;
    let $skillSoft = $('.s-c-c1');
    let $arrow1 = $('.arrow1');
    let $skillWeb = $('.s-c-c2');
    let $arrow2 = $('.arrow2');
    let $skillApp = $('.s-c-c3');
    let $arrow3 = $('.arrow3');
    let $h2_1 = $('.skill-h2-1');
    let $h2_2 = $('.skill-h2-2');
    let $h2_3 = $('.skill-h2-3');
    let $softGraph = $('.soft .skill-graph-progress');
    let $webGraph = $('.web .skill-graph-progress');
    let $appGraph = $('.app .skill-graph-progress');

    //animations for opening skill graphs
    //software tabs
    if($button === 'skill-soft'){
        $(this).toggleClass('sActive');
        $(this).next().toggleClass('scActive');
        $arrow1.toggleClass('arrowActive');
        //check if already opened
        if ($skillSoft.hasClass('.active') !== true){
            //animate title
            $h2_1.animate({
                left: '-30%'
            });

            //animate opening background
            $skillSoft.addClass('.active');
            $skillSoft.animate({
                top: '20%',
                opacity: '1',
                zIndex: '3'
            });
            //animate others leaving
            $skillWeb.animate({
                bottom: '0',
                opacity: '0',
                zIndex: '-3'
            });
            $skillApp.animate({
                bottom: '0',
                opacity: '0',
                zIndex: '-3'
            });
            //animate graphs
            for (let i = 0; i < $softGraph.length; i++){
                switch(i){
                    case 0:
                        $softGraph.eq(i).animate({
                            width: '62%',
                        });
                        $softGraph.eq(i).css('background','1E2939');
                        break;
                    case 1:
                        $softGraph.eq(i).animate({
                            width: '58%',
                        });
                        $softGraph.eq(i).css('background','1E2939');
                        break;
                    case 2:
                        $softGraph.eq(i).animate({
                            width: '50%',
                        });
                        $softGraph.eq(i).css('background','1E2939');
                        break;
                    case 3:
                        $softGraph.eq(i).animate({
                            width: '55%',
                        });
                        $softGraph.eq(i).css('background','1E2939');
                        break;
                    default:
                        break;
                }
            }
        }
        //if opened
        else{
            //close content
            $h2_1.animate({
                left: '0'
            });
            $skillSoft.removeClass('.active');
            $skillSoft.animate({
                top: '5%',
                opacity: '1',
                zIndex: '3'
            });
            //bring others back
            $skillWeb.animate({
                top: '10%',
                opacity: '1',
                zIndex: '3'
            });
            $skillApp.animate({
                top: '15%',
                opacity: '1',
                zIndex: '3'
            });
            //animate graphs
            for (let i = 0; i < $softGraph.length; i++){
                switch(i){
                    case 0:
                        $softGraph.eq(i).animate({
                            width: '0',
                        }, 200);
                        $softGraph.eq(i).css('background','1E2939');
                        break;
                    case 1:
                        $softGraph.eq(i).animate({
                            width: '0',
                        }, 200);
                        $softGraph.eq(i).css('background','1E2939');
                        break;
                    case 2:
                        $softGraph.eq(i).animate({
                            width: '0',
                        }, 200);
                        $softGraph.eq(i).css('background','1E2939');
                        break;
                    case 3:
                        $softGraph.eq(i).animate({
                            width: '0',
                        }, 200);
                        $softGraph.eq(i).css('background','1E2939');
                        break;
                    default:
                        break;
                }
            }
        }


    }

    //web tabs
    else if($button === 'skill-web'){
        $(this).toggleClass('sActive');
        $(this).next().toggleClass('scActive');
        $arrow2.toggleClass('arrowActive');

        //check if opened
        if ($skillWeb.hasClass('.active') !== true){
            //animate opening background
            $h2_2.animate({
                left: '-30%'
            });
            $skillWeb.addClass('.active');
            $skillWeb.animate({
                top: '-5%',
                opacity: '1',
                zIndex: '3'
            });
            //animate others leaving
            $skillSoft.animate({
                top: '0',
                opacity: '0',
                zIndex: '-3'
            });
            $skillApp.animate({
                bottom: '0',
                opacity: '0',
                zIndex: '-3'
            });
            //animate opening graph
            for (let i = 0; i < $webGraph.length; i++){
                switch(i){
                    case 0:
                        $webGraph.eq(i).animate({
                            width: '74%',
                        });
                        $webGraph.eq(i).css('background','1E2939');
                        break;
                    case 1:
                        $webGraph.eq(i).animate({
                            width: '85%',
                        });
                        $webGraph.eq(i).css('background','1E2939');
                        break;
                    case 2:
                        $webGraph.eq(i).animate({
                            width: '60%',
                        });
                        $webGraph.eq(i).css('background','1E2939');
                        break;
                    case 3:
                        $webGraph.eq(i).animate({
                            width: '57%',
                        });
                        $webGraph.eq(i).css('background','1E2939');
                        break;
                    default:
                        break;
                }
            }
        }
        //if opened
        else{
            //close content
            $h2_2.animate({
                left: '0'
            });
            $skillWeb.removeClass('.active');
            $skillWeb.animate({
                top: '10%',
                opacity: '1',
                zIndex: '3'
            });
            //bring others back
            $skillSoft.animate({
                top: '5%',
                opacity: '1',
                zIndex: '3'
            });
            $skillApp.animate({
                top: '15%',
                opacity: '1',
                zIndex: '3'
            });
            //animate graphs
            for (let i = 0; i < $webGraph.length; i++){
                switch(i){
                    case 0:
                        $webGraph.eq(i).animate({
                            width: '0',
                        });
                        $webGraph.eq(i).css('background','1E2939');
                        break;
                    case 1:
                        $webGraph.eq(i).animate({
                            width: '0',
                        });
                        $webGraph.eq(i).css('background','1E2939');
                        break;
                    case 2:
                        $webGraph.eq(i).animate({
                            width: '0',
                        });
                        $webGraph.eq(i).css('background','1E2939');
                        break;
                    case 3:
                        $webGraph.eq(i).animate({
                            width: '0',
                        });
                        $webGraph.eq(i).css('background','1E2939');
                        break;
                    default:
                        break;
                }
            }
        }
    }

    //app tabs
    else if($button === 'skill-app'){
        $(this).toggleClass('sActive');
        $(this).next().toggleClass('scActive');
        $arrow3.toggleClass('arrowActive');
        //check if opened
        if ($skillApp.hasClass('.active') !== true){
            //animate opening background
            $h2_3.animate({
                left: '-30%'
            });
            $skillApp.addClass('.active');
            $skillApp.animate({
                top: '-25%',
                opacity: '1',
                zIndex: '3'
            });
            //animate others leaving
            $skillSoft.animate({
                top: '0',
                opacity: '0',
                zIndex: '-3'
            });
            $skillWeb.animate({
                top: '0',
                opacity: '0',
                zIndex: '-3'
            });
            //animate opening graph
            for (let i = 0; i < $appGraph.length; i++){
                switch(i){
                    case 0:
                        $appGraph.eq(i).animate({
                            width: '50%',
                        });
                        $appGraph.eq(i).css('background','1E2939');
                        break;
                    case 1:
                        $appGraph.eq(i).animate({
                            width: '80%',
                        });
                        $appGraph.eq(i).css('background','1E2939');
                        break;
                    case 2:
                        $appGraph.eq(i).animate({
                            width: '90%',
                        });
                        $appGraph.eq(i).css('background','1E2939');
                        break;
                    case 3:
                        $appGraph.eq(i).animate({
                            width: '75%',
                        });
                        $appGraph.eq(i).css('background','1E2939');
                        break;
                    default:
                        break;
                }
            }
        }
        else{
            //close content
            $h2_3.animate({
                left: '0'
            });
            $skillApp.removeClass('.active');
            $skillApp.animate({
                top: '15%',
                opacity: '1',
                zIndex: '3'
            });
            //bring others back
            $skillSoft.animate({
                top: '5%',
                opacity: '1',
                zIndex: '3'
            });
            $skillWeb.animate({
                top: '10%',
                opacity: '1',
                zIndex: '3'
            });
            //animate graphs
            for (let i = 0; i < $appGraph.length; i++){
                switch(i){
                    case 0:
                        $appGraph.eq(i).animate({
                            width: '0',
                        });
                        $appGraph.eq(i).css('background','1E2939');
                        break;
                    case 1:
                        $appGraph.eq(i).animate({
                            width: '0',
                        });
                        $appGraph.eq(i).css('background','1E2939');
                        break;
                    case 2:
                        $appGraph.eq(i).animate({
                            width: '0',
                        });
                        $appGraph.eq(i).css('background','1E2939');
                        break;
                    case 3:
                        $appGraph.eq(i).animate({
                            width: '0',
                        });
                        $appGraph.eq(i).css('background','1E2939');
                        break;
                    default:
                        break;
                }
            }
        }
    }
});

