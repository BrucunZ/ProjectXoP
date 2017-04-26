/*global $*/
$(document).keydown(function(e){
    switch(e.keyCode){
        case 39:
            $("#kim").animate({"marginLeft":"+=20px"});
            $("#kim").css("animation","runright 0.6s steps(4) infinite");
            break;
            case 37:

                $("#kim").animate({"marginLeft":"-=20px"});
            $("#kim").css("animation","runleft 0.6s steps(4) infinite");
            break;
                
            case 32:
                 $("#kim").css("animation","punchright 0.5s steps(2) infinite");
                 break;
                
    
    }
});
$(document).keyup(function(e){
    switch(e.keyCode){
        case 39:
             $("#kim").css("background-position","-0px");
     $("#kim").css("animation","runright 0.5s steps(4) 0");
     $("#kim").stop(true,true);
     break;
     case 37:
         $("#kim").css("background-position","-500px");
        $("#kim").css("animation","runleft 0.5s steps(4) 0");
     $("#kim").stop(true,true);
     break;
      case 32:
                 $("#kim").css("animation","punchright 0.3s steps(2) 0");
                 break;
                
    }

});