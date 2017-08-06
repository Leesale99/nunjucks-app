(function(){
	var componentBox = document.querySelectorAll('.component-container');
	for (var i = 0; i < componentBox.length; i++) {
		var codeBox = document.getElementById(componentBox[i].dataset.include);
		var componentHTML  = componentBox[i].innerHTML;
		codeBox.innerHTML = componentHTML.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
	}
})();