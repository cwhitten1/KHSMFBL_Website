function loadAnnouncements(){
	Parse.initialize("QaLPx3YF1jEDYPObHwHKlNy1tXd0WNUOMAsiG4TS", "YoXeKebc0qwKsp2dnnjEGVYPbawYUj5z7aRuXsT0");

	var Announcement = Parse.Object.extend("Announcement");
	var query = new Parse.Query(Announcement);
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
      var curr_ann_timestamp = curr_ann_date.toLocaleTimeString();
      var curr_ann_datestamp = curr_ann_date.toLocaleDateString();
	  new_html += "<div class=\"well content-row\"><div class=\"text-right\">" + curr_ann_datestamp + "</div><div class=\"text-center\">" + curr_ann.get('message') + "</div><div class=\"text-right\">" + curr_ann_timestamp + "</div></div>"

      //new_html += "<div class=\"well text-center content-row\">" + curr_ann.get('message') + " " + curr_ann_timestamp + "</div>";
    }

    document.getElementById("announcements_container").innerHTML = new_html;
}