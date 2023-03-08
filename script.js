var hidden = false;

$(".expand").click(
   () => {
      hidden = !hidden;
      hidden ?
         $(".links").css({
            "visibility": "hidden",
         }) :
         $(".links").css({
            "visibility": "visible",
         });
   }
)
