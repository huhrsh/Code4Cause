let latitude;
let longitude;
const apiKey = '9adc042aea030b7ef4446926b6523943';
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // latitude = parseFloat(position.coords.latitude.toFixed(2));
        // longitude = parseFloat(position.coords.longitude.toFixed(2));
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        // var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        // fetch(apiUrl)
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching weather data:', error);
        //     });

        //     showToast("Location fetched");

        // console.log("Latitude: " + latitude + ", Longitude: " + longitude);
    }, function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                showToast("User denied permission for geolocation!");
                break;
            case error.POSITION_UNAVAILABLE:
                showToast("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                showToast("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                showToast("An unknown error occurred.");
                break;
        }
    });
} else {
    showToast("Geolocation is not supported by your browser.");
}


