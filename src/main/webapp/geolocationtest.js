document.addEventListener("DOMContentLoaded", function () {
    let x = document.querySelector("#demo");
    let y = document.querySelector("#rangeShow");
    let getPos = document.querySelector("#geoLocate");
    let range = document.querySelector("#range");
    getPos.addEventListener("click", function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    });
    range.addEventListener("click", function getRange() {
        if (range.value != 0) {

            y.innerHTML = `Your range is ${range.value}`;
        } else {
            y.innerHTML = "Set your range.";
        }
    });
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
        let latlon = position.coords.latitude + "," + position.coords.longitude;
        let map = "https://maps.googleapis.com/maps/api/staticmap?center="
        +latlon+"&zoom=14&size=400x300&key=AIzaSyA2AzcUJLiiu879rNxangBccd4YeH8FBBQ";
        //let map = "https://maps.googleapis.com/maps/api/staticmap?center="
        //+latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
        document.querySelector("#mapholder").innerHTML = `<img src="${map}">`
    }
});