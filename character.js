/*global $*/
 $(document).keydown(function(e){
switch(e.keyCode) {
        case 65:
     $("#loli").animate({"marginLeft":"-=20px"});
            break;
        case 87:
           $("#loli").animate({"marginTop":"-=60px"});
            break;
        case 68:
            $("#loli").animate({"marginLeft":"+=20px"});
           $("#loli").css("background","url('https://farm3.staticflickr.com/2905/34068591586_577a296328_m.jpg");
            break;
        case 83:
            $("#loli").animate({"marginTop":"+=20px"});
            break;  
    }   
});
    
 $(document).keyup(function(e){
switch(e.keyCode) {
      
    case 87:
           $("#loli").animate({"marginTop":"+=60px"});
            break;
    case 68:
           $("#loli").css("background","url('https://farm3.staticflickr.com/2922/34067172606_199af27ed7_m.jpg");
            break;  
}
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    