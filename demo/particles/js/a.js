    	$(document).ready(function(){
					console.log("hello world")
    animateDiv();


    function animateDiv(){
    var newq1 = makeNewPosition();
    var newq2 = makeNewPosition();
    var newq3 = makeNewPosition();



    $('.a1').animate({ top: newq1[0], left: newq1[1] },1500, function(){
      animateDiv();        
    });
    $('.a2').animate({ top: newq2[0], left: newq2[1] },1500, function(){
      animateDiv();        
    });
    $('.a3').animate({ top: newq3[0], left: newq3[1] },1500, function(){
      animateDiv();        
    });



function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}
    
};
    
});

console.log('test')