var hidden = true;
var events = false;
$(".event3").hide();
$(".event4").hide();

$(".eventExpand").click(()=>{
   events = !events;
   if(events == false){
      $(".sundayschool").css({"margin-top": "-8.5%"})
      $(".secondservice").css({"margin-top": "-8.5%"})
      $(".event3").hide();
      $(".event4").hide();
   }else{
      $(".sundayschool").css({"margin-top": "-4.5%"})
      $(".secondservice").css({"margin-top": "-4.5%"})
      $(".event3").show();
      $(".event4").show();
   }
})

$(".expand").click(
   () => {
      hidden = !hidden;
      hidden && (
         $(".expand").css({ "animation": "arrow .6s backwards"}),
         $(".links").slideUp(500),
         setTimeout(() => {
            $(".links").css({
               "visibility": "hidden",
            })
         }, 505)
      ) 
      !hidden && (
         $(".links").css({
            "visibility": "visible",
         }),
         $(".links").hide(),
         $(".links").slideDown(500),
         $(".expand").css({ "animation": "arrow 1s forwards" })
      )
   }
)