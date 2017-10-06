// use axios package to make http request
var axios = require("axios");
//function to make api calls
var location = {
	runQuery: function(getLocation){
		console.log("here is the location to be searched" + getLocation);
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				const pos = {
					lat: position.coords.latitude,
					long: position.coords.longitude,
					zips: ''
				};
				var queryURL ="https://maps.googleapis.com/maps/api/geocode/json?latlng="+pos.lat+","+ pos.long+"&key=AIzaSyBao5t2cXEN-W6a_Mw0JBIUlifRXiSaLaM";
				return axios.get(queryURL).then(function(response) {
					pos.zips = response.results[0].address_components[7].long_name; 
					callback(pos);
				});
			}).catch((err) => {
				console.log("Error fetching data", err)
			}
		}
// export this function
module.exports = location
		