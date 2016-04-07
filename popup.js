document.addEventListener('DOMContentLoaded', function () {
	var bg = chrome.extension.getBackgroundPage();
	chrome.storage.sync.get({"fico": true, "kollar": true, "kotleba": true},function(object){
		document.getElementById('fico').checked = object.fico;
		document.getElementById('kollar').checked = object.kollar;
		document.getElementById('kotleba').checked = object.kotleba;
	});
	bg.replace();
});