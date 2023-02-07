var hidden = true;

$(".expand").click(
   () => {
      hidden = !hidden;
      hidden ?
         $(".links").css({
            'visibility': 'hidden',
            "width": "50%",
            "display": "inline-flex",
            "list-style": "none",
            "margin-left": "-7%",
            "font-size": "15px",
         }) :
         $(".links").css({
            'visibility': 'visible',
            "margin-top": "10%",
            "display": "inline",
            "position": "absolute",
            "left": '0'
         });
         hidden ? $("nav").css({
            "display": "inline-flex",
            "width": "101vw",
            "height": "10vh",
            "position": "sticky",
            "left": "0",
            "top": "0",
            "background-color": "rgba(255, 255, 255, 0.4)",
            "border": "2px solid rgba(0, 0, 0, 0.5)",
            "justify-content": "space-evenly",
            "z-index": "5"
         }) : $("nav").css({
            "display": "inline-flex",
            "width": "101vw",
            "height": "35vw",
            "position": "sticky",
            "left": "0",
            "top": "0",
            "background-color": "rgba(255, 255, 255, 0.4)",
            "border": "2px solid rgba(0, 0, 0, 0.5)",
            "justify-content": "space-evenly",
            "z-index": "5"
         })
   }
)

$("li").click(()=>{
   hidden = true;
   $(".links").css({
      'visibility': 'hidden',
      "width": "50%",
      "display": "inline-flex",
      "list-style": "none",
      "margin-left": "-7%",
      "font-size": "15px",
   })
   $("nav").css({
      "display": "inline-flex",
      "width": "101vw",
      "height": "10vh",
      "position": "sticky",
      "left": "0",
      "top": "0",
      "background-color": "rgba(255, 255, 255, 0.4)",
      "border": "2px solid rgba(0, 0, 0, 0.5)",
      "justify-content": "space-evenly",
      "z-index": "5"
   })
})