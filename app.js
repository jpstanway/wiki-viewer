$('#search-btn').on('click', function(e) {
  e.preventDefault();

  $('#wiki-links').text("");

  var topic = $('#search-box').val();
  var wiki_url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
                  + topic + "&format=json&callback=wikiCallback";
  var timeOut = setTimeout(function() {
    $('#wiki-links').text("Failed to get results, please try again.");
  }, 8000);

  $.ajax({
    url: wiki_url,
    dataType: "jsonp",
    success: function(response) {
      console.log(response);
      var articles = response[1];
      var descriptions = response[2];

      for (var i = 0; i < articles.length; i++) {
        article = articles[i];
        description = descriptions[i];
        var url = "http://en.wikipedia.org/wiki/" + article;
        $('#wiki-links').append("<li><a href='" + url + "' target='_blank'>"
                                + article + "</a><br><p>" + description + "</p></li>");
      };

      clearTimeout(timeOut);
    }
  });

});
