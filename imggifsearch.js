
function requestLandmarks() {
    var url = 'landmarks.json';

    var request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // Turn the server's text response into a JavaScript array
        var landmarks = JSON.parse(this.responseText);

        // Iterate through results and display on page
        var outputDiv = document.getElementById('landmarks');
        outputDiv.innerHTML = '';
        for (var i = 0; i < landmarks.length; i++) {
            outputDiv.innerHTML += '<li>' + landmarks[i].name;
        }
    });
    request.open('GET', url, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
}

function requestPlaces() {
    var url = 'https://places.cit.api.here.com/places/v1/autosuggest?app_id=cA1JGqTVNGL0aui192x6&app_code=RUj-gMvVPU0jZsiZRxbe1g&at=37.8695697,-122.2805568&q=museum&result_types=place';

    var request = new XMLHttpRequest();
    request.addEventListener('load', function () {

        // Turn the server's text response into a JavaScript object
        var responseJSON = JSON.parse(this.responseText);
        console.log(responseJSON);
        // Find the results array in that object
        var results = responseJSON.results;
        // Iterate through results and display on page
        var outputDiv = document.getElementById('places');
        outputDiv.innerHTML = '';
        for (var i = 0; i < results.length; i++) {
            outputDiv.innerHTML += '<li>' + results[i].title + " " +results[i].distance + "m away from search at "+results[i].position;
        }
    });
    request.open('GET', url, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
}

function requestGifs() {
    var url = 'https://api.giphy.com/v1/stickers/search?api_key=CTKt6VTPbU0X6QRBauwAhQhXgmfA1U3N&q=dancing&rating=g&limit=5';

    var request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // Turn the server's text response into a JavaScript object
        var responseJSON = JSON.parse(this.responseText);
        // Find the results array in that object
        var results = responseJSON.data;

        // Iterate through results and display on page
        var outputDiv = document.getElementById('gifs');
        outputDiv.innerHTML = '';
        for (var i = 0; i < results.length; i++) {
            var img = document.createElement('img');
            img.src = results[i].images.downsized.url;
            img.alt = results[i].title;
            img.width = 200;
            outputDiv.appendChild(img);
        }
    });
    request.open('GET', url, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
}

requestLandmarks();
requestPlaces();
requestGifs();
