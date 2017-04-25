/*global $*/
$(document).keydown(function(e){
    switch(e.keyCode){
        case 39:
            $("#kim").animate({"marginLeft":"+=20px"});
            $("#kim").css("animation","run 0.5s steps(4) infinite");
            break;
    }
});
$(document).keyup(function(e){
    switch(e.keyCode){
        case 39:
     $("#kim").css("animation","run 0.5s steps(4) 0");
     $("#kim").stop(true,true);
     break;
    }
});