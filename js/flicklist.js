
var api = {
  root: "https://api.themoviedb.org/3",
  token: "a334cd2c96ae880396654bbce6025ce6" // TODO 0 put your api key here
}

var flicklistView = new Vue({
	el: '#mount-target',
	data: function() {
		return {
			// This is the data model.
			// Whenever it changes, Vue will automatically re-render
			// the html for us.
			watchlistItems: [],
	        browseItems: [],
	        searchTerm: null
			};
		},
		methods: {
			discoverMovies: function () {
			/**
			 * Makes an AJAX request to themoviedb.org, asking for some movies
			 * if successful, updates the data.browseItems appropriately
			 */
				fetch(`${api.root}/discover/movie?api_key=${api.token}`)
					.then(resp => resp.ok ? resp.json() : Promise.reject(resp))
					.then(response => {
						console.log("We got a response from the Movie DB");
						console.log(response);

						this.browseItems = response.results;
					});
						// TODO 2- done
						// update this.browseItems, setting it equal to the movies we recieved in the response
                        //let this.browseItems = 
		},
		searchMovies: function(searchTerm) {
			console.log(`searching for movies with "${searchTerm}" in their title...`);

			fetch(`${api.root}/search/movie?api_key=${api.token}&query=${searchTerm}`)
			.then(resp = resp.ok ? resp.json() : Promise.reject(resp))
			.then((response) => {
				console.log("We heard from the Movie DB");
				console.log(response);

				this.browseItems = response.results;
			});
		},
				addToWatchlist: function(movie) {
					this.watchlistItems.push(movie);
		        },
		// TODO 5 -done
		// make a method to use when a "Add to Watchlist" button is clicked
		// It should accept a movie as a parameter, and add that item to
		// the watchlistItems list,
	},
	mounted: function() {
		// call discoverMovies when things start up
		this.discoverMovies();
	},
});