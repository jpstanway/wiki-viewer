// HANDLE COPYRIGHT DATE
var footer = document.getElementById('footer');
var date = new Date();
var year = date.getFullYear();

footer.innerHTML = '<p>&copy;' + year + ' Jordan Stanway. All rights reserved.</p>';

// SET UP WIKIPEDIA API
$('#search-btn').on('click', function(e) {
  e.preventDefault();

  $('.viewer').css('display', 'none');
  $('#wiki-links').text("");

  var topic = $('#search-box').val();
  var wiki_url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
                  + topic + "&format=json&callback=wikiCallback";
  var timeOut = setTimeout(function() {
    console.log("Failed to get results");
  }, 8000);

  $.ajax({
    url: wiki_url,
    dataType: "jsonp",
    success: function(response) {

      var articles = response[1];
      var descriptions = response[2];

      for (var i = 0; i < articles.length; i++) {
        article = articles[i];
        description = descriptions[i];
        var url = "http://en.wikipedia.org/wiki/" + article;
        $('#wiki-links').append("<div class='col-sm-6 link-div'><a class='links' href='"
                                + url + "' target='_blank'><h3>" + article + "</h3><br><p>"
                                + description + "</p></a>");
      };

      clearTimeout(timeOut);
    }
  });
});

$('#rand-btn').on('click', function(e) {
  e.preventDefault();
  window.open('https://en.wikipedia.org/wiki/Special:Random');
});

$('#title-link').on('click', function(e) {
  e.preventDefault();
  $('#wiki-links').text("");
  $('#search-box').val("");
});
