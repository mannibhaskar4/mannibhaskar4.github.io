var button=document.getElementById("enter");
var input=document.getElementById("userenter");
var ul=document.querySelector("ul");


function createListElement(){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function  addListAfterClick()
{
	
	
	if(input.value!==""){
		createListElement();	
	}
}

button.addEventListener("click",addListAfterClick)


//input.value is a command which has stored value of input box
//line 8 and 9 add the text types in input box to unordered list



// this part is for items when enter through keyboard
function addListAfterKeypress(event)
{
	
	
	if(input.value!==""&&event.keyCode/*event.which works as well*/===13){
		createListElement();
	}
}



input.addEventListener("keypress",addListAfterKeypress);
