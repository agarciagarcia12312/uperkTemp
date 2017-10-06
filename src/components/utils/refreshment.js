// axios to get http request in react instead of query url
var axios = require("axios");
//takes lat and lon of venue location and sends to google places api to obtain nearby lodging options
var coffeSearch = {
	runQuery:function(searchRefereshment){
	var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBQkuYsm8oh06NHs9FxloCXM38CPbYG0BQ&query=\"startbucks\"&location=" + pos.lat + "," + pos.long + "&radius=4000",
	retun axios(queryURL).then(function(response){
			if (response.result[i].name) {
				return response.results[i].name;
			} else {
				return "";
			}
		}).catch((err) => {
			console.log("Error fetching data", err)
		})
	}
};



