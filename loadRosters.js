function loadRosters(){
	Parse.initialize("QaLPx3YF1jEDYPObHwHKlNy1tXd0WNUOMAsiG4TS", "YoXeKebc0qwKsp2dnnjEGVYPbawYUj5z7aRuXsT0");

	var Roster = Parse.Object.extend("Roster");
	var query = new Parse.Query(Roster);
	query.ascending('playerName');
	query.find({
	  success: function(results) {
	    //alert("Successfully retrieved " + results.length + " players.");
	    displayRosters(results);
	  },
	  error: function(error) {
	    alert("Error: Could not load rosters.");
	  }
	});
}


function displayRosters(all_players){
	
	for(var i = 0; i < all_players.length; i++)
	{
		var player = all_players[i];
		displayToRoster(player.get('playerName'), player.get('teamName'));
	}
		
}

function displayToRoster(playerName, teamName){
	document.getElementById(teamName).innerHTML += "<div class=\"row\">" + playerName + "</div>";
}