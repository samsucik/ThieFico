var fico = true;
var kollar = true;
var kotleba = true;

chrome.storage.sync.get({"fico": true, "kollar": true, "kotleba": true},function(obj){initialise(obj);});

function initialise(obj){
	fico = obj.fico;
	kotleba = obj.kotleba;
	kollar = obj.kollar;
}

function changeFico() {
	fico = document.querySelector('#fico').checked;
	if (!fico){reloadTab();} else {saveData();replace();}
}
function changeKollar() {
	kollar = document.querySelector('#kollar').checked;
	if (!kollar){reloadTab();} else {saveData();replace();}
}
function changeKotleba() {
	kotleba = document.querySelector('#kotleba').checked;
	if (!kotleba){reloadTab();} else {saveData();replace();}
}

document.addEventListener('DOMContentLoaded', function () {document.querySelector('#fico').addEventListener('change', changeFico);});
document.addEventListener('DOMContentLoaded', function () {document.querySelector('#kollar').addEventListener('change', changeKollar);});
document.addEventListener('DOMContentLoaded', function () {document.querySelector('#kotleba').addEventListener('change', changeKotleba);});

function reloadTab(){
	saveData();
  	chrome.tabs.reload();
}

function saveData(){
	var obj = {};
	obj["fico"] = fico;
	obj["kollar"] = kollar;
	obj["kotleba"] = kotleba;
	chrome.storage.sync.set(obj, function() {});
	chrome.storage.sync.get({"fico": true, "kollar": true, "kotleba": true},function(object){});
}

function replace(){chrome.tabs.executeScript({file: 'content.js'});}