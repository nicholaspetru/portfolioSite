//siteApp.js

var eduExpand = false;

function showAndHide(currExp) {
	var experienceList = ['#ascendify', '#ADTeach', '#Racket', '#OCS', '#PipelineMSP'];
	$.each(experienceList, function(index, value) {
		(value == currExp) ? loadExperience( "#expDescriptions aside div", value ) : $( value ).css('display', 'none');
	});
	
}

function loadExperience(container, selector) {
	ajaxExpLoad( container, selector );
	// $( container ).load( "supplement.html " + selector );
	$( container + selector ).css( 'display', 'block' );
}

function expand() {
	var addInfo = document.getElementById("addInfo");
	var btn = document.getElementById("moreExp");

	if(eduExpand){
		addInfo.style.display = 'none';
		btn.innerHTML = "View More Items";
		eduExpand = false;
	} else {
		addInfo.style.display = 'block';
		btn.innerHTML = "Hide Additional Items";
		eduExpand = true;
	}
}

function expHoverDisplay(targetClass) {

	$(targetClass).map( function() {
		var curr = $(this).data('toggle');
		$(this).hover(
			function() {
				showAndHide(curr);
			}
		);
	});
}

// function expand() {
// 	$(document).ready( function(){
// 	    var $btn = $('#moreExp'), 
// 	        $target = $('#HRSdest');

// 	    //$btn.on('click', '> a', function(event) {
//         var url = this.href;
//         event.preventDefault();
//         $target.load("supplement.html");
// 	    //});
// 	});
// }

/* Ajax prep */
function ajaxExpLoad(dest, selector) {
	event.preventDefault();
 
   	$.ajax({
   		url: "supplement.html", 
      	success: function(data) {
        	$(dest).append($(data).find(selector));
        	console.log('The text has successfully loaded');
      	},
      	error: function() {
        	console.log('An error occurred while loading the text');
      	}
   	});
};

