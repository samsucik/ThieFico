var fico = true;
var kollar = true;
var kotleba = true;

chrome.storage.sync.get({"fico": true, "kollar": true, "kotleba": true},function(object){replace(object);});

function replace(obj){
    fico = obj.fico;
    kollar = obj.kollar;
    kotleba = obj.kotleba;

    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text; 
                if (fico){
                    replacedText = replacedText.replace(/Fica([^a-zA-Z]|$)/g, myReplace1);
                    function myReplace1(str, char1) {return "Zlodeja" + char1;}

                    replacedText = replacedText.replace(/([^a-zA-Z]|^)fica([^a-zA-Z]|$)/gi, myReplace2);
                    function myReplace2(str, char1, char2) {return char1 + "zlodeja" + char2;}

                    replacedText = replacedText.replace(/Fico([^a-zA-Z]|$)/gi, myReplace3);
                    function myReplace3(str, char1) {return "Zlodej" + char1;} 
                    
                    replacedText = replacedText.replace(/([^a-zA-Z]|^)fico([^a-zA-Z]|$)/gi, myReplace5); 
                    function myReplace5(str, char1, char2) {return char1 + "zlodej" + char2;} 

                    replacedText = replacedText.replace(/([^a-zA-Z]|^)Fico/gi, myReplace4);
                    replacedText = replacedText.replace(/([^a-zA-Z]|^)fico/gi, myReplace4);
                    function myReplace4(str, char1) {return char1 + "Zlodejo";} 

                    replacedText = replacedText.replace(/ntifico([^a-zA-Z]|$)/gi, "ntizlodej");
                    replacedText = replacedText.replace(/ntifico([a-zA-Z]|$)/gi, myReplace6);
                    function myReplace6(str, char1) {return "ntizlodejo" + char1;} 
                }
                if (kotleba){
                    replacedText = replacedText.replace(/Kotleb/gi, "Kotlet");
                }
                if (kollar){
                    replacedText = replacedText.replace(/Kollár/gi, "Dolár");        
                } 
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}