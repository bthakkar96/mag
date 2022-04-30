$(function () {

  // There are many APIs online that you can fetch data from. Many of these
  // return data in JSON or XML format. Here, we use the Flickr API to retrieve
  // image data as JSON (JavaScript Object Notation).

  // First, store the URL of the API.
  // The ?jsoncallback parameter is necessary to avoid cross-origin errors in
  // modern browsers (you're not generally allowed to fetch data from remote sites).
  var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  // Next, we use jQuery's getJSON() function to access to API and retrieve data.
  $.getJSON(flickrApiUrl, {
    // option
    tags: "sun, bulding",
    tagmode: "any",
    format: "json"
  }).done(function(data){
    //sucess
    //console.log(data);
    $.each(data.items, function(index, item){
      //console.log(item.media);
      $("<img>").attr({
        "src": item.media.m,
        "title": item.title,
      }).appendTo("#flickr")
      if(index == 4) {
        return false
      }
    })
    //alert("AJAX call sucess")
  }).fail(function(){
    //fail
    //alert("AJAX call failed")
  })

});
