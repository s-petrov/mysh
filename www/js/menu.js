
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

	$.fn.randomize = function(elements) {
	    return this.each(function() {
	      var $this = $(this);
	      var unsortedElems = $this.find(elements);
	      var elems = unsortedElems.clone();
	      
	      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

	      for(var i=0; i < elems.length; i++)
	        unsortedElems.eq(i).replaceWith(elems[i]);
	    }); 
	};
	