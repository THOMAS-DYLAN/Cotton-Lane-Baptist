var hidden = true;

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