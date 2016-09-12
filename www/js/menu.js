$(function(){

	var blio = new Array(
		"<a href=\"img/pictures/008.jpg\" title=\"\"></a>",
		"<a href=\"img/pictures/009.jpg\" title=\"\"></a>",
		"<a href=\"img/pictures/010.jpg\" title=\"\"></a>",
		"<a href=\"img/pictures/011.jpg\" title=\"\"></a>",
		"<a href=\"img/pictures/012.jpg\" title=\"\"></a>"
	);

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

	$("#icon-bottom-left").click(function(){

        if ($("#icon-bottom-left").hasClass("moved")){
            $("#web-contact").animate({
                left: '-=100px'
            });
            $("#info-contact").animate({
                left: '-=100px',
                top: '+=100px',
            });
            $("#phone-contact").animate({
                top: '+=100px'
            });
		} else {
	        $("#web-contact").animate({
	            left: '+=100px'
	        });
	        $("#info-contact").animate({
	            left: '+=100px',
	            top: '-=100px',
	        });
	        $("#phone-contact").animate({
	            top: '-=100px'
	        });
	    }

        $("#icon-bottom-left").toggleClass("moved");
    });

$(".icon-box").click(function(){
	//addImagesMore();
});

	function addImagesMore(){
		var newAdded = false;
		for (var i = 0; i < 3; i++){
			if(blio.length > 0){
				$(".thumbs").append(blio[0]);
				blio.splice(0, 1);
				newAdded = true;
			} else {
				break;
			}
		}
		if (newAdded){
			$("#gallerySlider").empty();
			$('.thumbs a').touchTouch();
		}
	};

});	