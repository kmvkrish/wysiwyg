// This is a javascript file named wysiwyg.js
function iBold(){
	 document.execCommand('bold',false,null); 
}
function iUnderline(){
	 document.execCommand('underline',false,null);
}
function iItalic(){
	 document.execCommand('italic',false,null); 
}
function iFontSize(){
	var size = prompt('Enter a size 1 - 7', '');
	 document.execCommand('FontSize',false,size);
}
function iForeColor(){
	var color = prompt('Define a basic color or apply a hexadecimal color code for advanced colors:', '');
	 document.execCommand('ForeColor',false,color);
}
function iHorizontalRule(){
	 document.execCommand('inserthorizontalrule',false,null);
}
function iUnorderedList(){
	 document.execCommand("InsertOrderedList", false,"newOL");
}
function iOrderedList(){
	 document.execCommand("InsertUnorderedList", false,"newUL");
}
function iLink(){
	var linkURL = prompt("Enter the URL for this link:", "http://"); 
	 document.execCommand("CreateLink", false, linkURL);
}
function iUnLink(){
	 document.execCommand("Unlink", false, null);
}
function iImage(){
	var imgSrc = prompt('Enter image location', '');
    if(imgSrc != null){
         document.execCommand('insertimage', false, imgSrc); 
    }
}
function submit_form(){
	var theForm = document.getElementById("myform");
	theForm.elements["myTextArea"].value = window.frames['richTextField'].document.body.innerHTML;
	theForm.submit();
}