//siteApp.js

var eduExpand = false;

function showAndHide(objMain, objList) {
	for (o = 0; o < (objList.length); o++){
	    var el = document.getElementById(objList[o]);
		el.style.display = 'none';
	}
	var newEl = document.getElementById(objMain);
	newEl.style.display = 'block';
}

function expand() {
	var addInfo = document.getElementById("addInfo");
	var btn = document.getElementById("moreExp");

	if(eduExpand){
		addInfo.style.display = 'none';
		btn.innerHTML = "View More Items";
		eduExpand=false;
	} else {
		addInfo.style.display = 'block';
		btn.innerHTML = "Hide Additional Items";
		eduExpand=true;
	}
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

