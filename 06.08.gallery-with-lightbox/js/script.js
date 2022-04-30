$(function () {
  var galleryItems = $(".gallery").find("img").css("width","33%").css("opacity","0.7");
  galleryItems.mouseenter(function(){
    $(this).stop().fadeTo(500, 1);
  })
  galleryItems.mouseleave(function(){
    $(this).stop().fadeTo(500, 0.7);
  })

  galleryItems.click(function(){
    var imgVar = $(this).attr("src");
    console.log(imgVar);
    var imgVar2 = $("img").attr("src", imgVar).css("width", "100%");
    $(".lightbox").empty().append(imgVar2).fadeIn(200);
  })
  $("html").keydown(function(event){
    console.log(event.which);
    if(event.which === 39){
      // alert("hihi")
      $(".blue-box").stop().animate({
       "marginLeft":"+=10px"
      }, 50)
    }
  })
});





