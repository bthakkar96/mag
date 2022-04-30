$(function () {
  //$("#list").find("li").css("background-color", "pink");
  //$("#list li").first().css("background-color", "pink");
  //$("ul ul").append("<li>hihihihi</li>");
  //$("#list").prevAll().css("background-color", "pink");
  //var detachItem = $(".green-box").detach();
 // $("#list").append(detachItem);
  // $(".red-box, .blue-box").replaceWith("<div class='green-box'>more green</div>");
  // $("form").children().remove()
  // $(".red-box, .blue-box, .green-box").empty()
  // console.log($('#special-link').prop("href"));
  // console.log($('#special-link').attr("href"));
  // console.log($('.test').prop("checked"));
  // console.log($('.test').attr("checked"));
  //$('#special-link').attr("href", "new-url");
  //$('#special-link').prop("href")
  var buttonVar = $('#test');
  
  buttonVar.click({
    user: "peter",
    surname: "ho"
  }, function(event){
      greetUser(event.data);
  });
  function greetUser(userdata){
    var username = userdata.user;
    alert("hello" + username + userdata.surname);
  }
  // console.log(firstVar.html());
  // console.log(firstVar.text());
  // console.log(firstVar.append("jfjfjfjfj").html());
  // $(".red-box").click(function(event){
  //   $(this).fadeTo(1000, 0.5);
  // })
  // $(".green-box").hover(function(event){
  //   $(this).text("gb hovered");
  // })

  // $(".blue-box").hover(function(){
  //   $(this).stop().fadeTo(1000, 0.5);
  
  // },function(){
  //   $(this).stop().fadeTo(1000, 1);

  // })
  // $("body").on("click keydown", function(){
  //   alert("keydown huhuuu");
  // })
});

// Helper function which highlights the given element with yellow background

