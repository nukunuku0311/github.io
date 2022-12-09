$(function(){
    
    
    
    // work画像
    $(".h-pic1").hover(function(){
        $("#pic1").css("opacity","1")
        $(".all-con").css("opacity","0")
    },
    function(){
        $("#pic1").css("opacity","0")
        $(".all-con").css("opacity","1")
    
    });

    $(".h-pic2").hover(function(){
        $("#pic2").css("opacity","1")
        $(".all-con").css("opacity","0")
    },
    function(){
        $("#pic2").css("opacity","0")
        $(".all-con").css("opacity","1")
    
    });

    $(".h-pic3").hover(function(){
        $("#pic3").css("opacity","1")
        $(".all-con").css("opacity","0")
    },
    function(){
        $("#pic3").css("opacity","0")
        $(".all-con").css("opacity","1")
    
    });
    
    
   
        
    // workクリック
    $(".btn-a").click(function () {
        $("#A-menu").addClass("active")
    });
    $(".stop").click(function(event){
        $("#A-menu").removeClass("active")
    });

    $(".btn-x").click(function(){
        $(".work").fadeToggle();
        
    });
    
    $(".click1").on("click", function() {
  event.preventDefault();
  var link = $(this).attr('href');
  setTimeout(function() {
    location.href= "https://nukunuku0311.github.io/company/";
  }, 1000);
   setTimeout(function(){
   $(".all-con").css("opacity","1");
   $("#pic1").css("opacity","0");
   },1500);
});
    
    $(".click2").on("click", function() {
  event.preventDefault();
  setTimeout(function() {
    location.href= "https://nukunuku0311.github.io/sneaker/";
  }, 1000);
        setTimeout(function(){
   $(".all-con").css("opacity","1");
   $("#pic2").css("opacity","0");
   },1500);
        
});
    
   $(".click3").on("click", function() {
  event.preventDefault();
  setTimeout(function() {
    location.href= "https://nukunuku0311.github.io/splatoon/";
  }, 1000);
       setTimeout(function(){
   $(".all-con").css("opacity","1");
   $("#pic3").css("opacity","0");
   },1500);
      
});

    // チュートリアルホバー

    if (window.matchMedia("(max-width: 600px)").matches) {
        $(".target-1").css("opacity","1");
    } else {
        $(".slct-1").hover(function(){
            $(".target-1").css("opacity","1");
        },function(){
            $(".target-1").css("opacity","0");
        });
    }
    
     if (window.matchMedia("(max-width: 600px)").matches) {
        $(".slct-2").on("click",function(){
            $(".target-1").css("opacity","0");
        });
        } else {
          $(".target-1").css("opacity","1");
        }

    $(".slct-2").hover(function(){
        $(".target-2").css("opacity","1");
    },function(){
        $(".target-2").css("opacity","0");
    });

  

    $(".slct-1").click(function(){
        $(".tutorial").fadeOut(500);
        $(".all-con").css("opacity","1");
    });

    $(".btn-b").click(function(){
        $(".tutorial").fadeIn(500);
        $(".all-con").css("opacity","0");
        $(".target-1").css("opacity","1");
        $(".work").fadeOut(500);
    });
    });

    // rpg
    if(window.matchMedia("(max-width: 600px)").matches){
        $(".btn-y").click(function(){
        $(".rpg").css("opacity","1");
        $(".all-con").animate({
            "marginTop":"150px"
        },250);
        $(".btn-x").prop("disabled",true);
        $(".btn-a").prop("disabled",true);
        $(".btn-b").prop("disabled",true);
        $(".jyanken").fadeIn(1000);
        $("#random").css("display","none")
        $(".work").fadeOut(500);
    });
    }else {
        $(".btn-y").click(function(){
            $(".rpg").css("opacity","1");
            $(".all-con").animate({
                "marginTop":"200px"
            },250);
            $(".btn-x").prop("disabled",true);
            $(".btn-a").prop("disabled",true);
            $(".btn-b").prop("disabled",true);
            $(".jyanken").fadeIn(1000);
            $("#random").css("display","none")
            $(".work").fadeOut(500);
        });
    }

    $(".remove").click(function(){
        $(".rpg").css("opacity","0");
        $(".all-con").animate({
            "marginTop":"0"
        },500);
        $(".btn-x").prop("disabled",false);
        $(".btn-a").prop("disabled",false);
        $(".btn-b").prop("disabled",false);
        $("#random").css("display","none");
    });

    $(".start").click(function(){
        $(".jyanken").fadeOut(200);
        $(".saisyo").fadeIn(1500).fadeOut(1500);
        $(function(){
            var maxNum = 3,
        rdm = Math.floor(Math.random()*(maxNum))+1;
        $("#random").attr("src","jyanken" + rdm + ".png");
        });
       setTimeout(function(){
        $("#random").fadeIn();
       },3000);
    });

});
