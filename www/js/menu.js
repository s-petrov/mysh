
	$( "#menu-icon" ).click(function() {
  		var x = document.getElementById("myTopnav");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
	    }
	});

	$(".acc-item").click(function() {
		$(this).find(".acc-hide").toggle("slow");
	});