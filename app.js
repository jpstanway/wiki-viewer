
var topic = $('#search-box').val();
var wiki_url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
                + topic + "&format=json$callback=wikiCallback";

$.ajax({
  url: wiki_url,
  dataType: "jsonp",
  success: function(response) {

  }
});
