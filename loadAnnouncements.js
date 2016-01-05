function loadAnnouncements(){
	Parse.initialize("QaLPx3YF1jEDYPObHwHKlNy1tXd0WNUOMAsiG4TS", "YoXeKebc0qwKsp2dnnjEGVYPbawYUj5z7aRuXsT0");

	var Announcement = Parse.Object.extend("Announcement");
	var query = new Parse.Query(Announcement);
	query.descending("createdAt")
	query.find({
	  success: function(results) {
	    //alert("Successfully retrieved " + results.length + " announcements.");
	    displayAnnouncements(results);
	  },
	  error: function(error) {
	    alert("Error: Could not load announcements.");
	  }
	});
}


function displayAnnouncements(announcements){
	var new_html = "";
    for (var i = 0; i < announcements.length; i++) {
      var curr_ann = announcements[i];
      var curr_ann_date = curr_ann.createdAt;
      var curr_ann_timestamp = formatTime(curr_ann_date);
      var curr_ann_datestamp = formatDate(curr_ann_date);

	  new_html += "<div class=\"well content-row\"><div class=\"text-right\">" + curr_ann_timestamp + "</div><div class=\"text-center\">" + curr_ann.get('message') + "</div><div class=\"text-right\">" + curr_ann_datestamp + "</div></div>";

      //new_html += "<div class=\"well text-center content-row\">" + curr_ann.get('message') + " " + curr_ann_timestamp + "</div>";
    }

    document.getElementById("announcements_container").innerHTML = new_html;
}

function formatDate(date){
	var datestamp = date.toLocaleDateString();
	var pieces = datestamp.split("/");
	datestamp = pieces[0] + "/" + pieces[1] + "/" + pieces[2].substring(2);

	return datestamp;
}

function formatTime(date){
	var timestamp = date.toLocaleTimeString();
	var pieces = timestamp.split(":");
	timestamp = pieces[0] + ":" + pieces[1] + " " + pieces[2].substring(3);

	return timestamp;
}