function fetchPhotos(query) {
    $.ajax({
        url: 'https://api.flickr.com/services/rest/',
        data: {api_key: 'a0de4a213ab1191732ec4db4daf586a3',
            method: 'flickr.photos.search',
            tags: query, per_page: '10', format: 'json',
            safe_search: '1'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        success: function(json){
            var photos = json.photos.photo;
            for (var i = 0; i < photos.length; i++) {
                var photo = photos[i];
                var photoUrl = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_' + 'm.jpg';
                $('#demo').append('<img src="' + photoUrl + '">');
            }
        }
    });
}
var libForm = document.getElementById("lib-form");
libForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameVal = document.getElementById("name").value;
    var verbVal = document.getElementById("verb").value;
    var adjVal = document.getElementById("adjective").value;
    var nounVal = document.getElementById("noun").value;
    var storyDiv = document.getElementById("story");
    storyDiv.innerHTML = "The grandest dad in the world is " + nameVal + ". He " + verbVal + " rigorously. Unfortunately, " +
        "the " + adjVal + " flaw he had, was his " + nounVal + ".";
    fetchPhotos(nounVal);

});
