/* The functions defined below are just simple functions to store and retrieve data for sidebar extensions. We are  using localStorage here, but if depending on your use case, it would be possible to just store values normally in the background script.*/

var value;

function getValue(){
	value = localStorage.getItem('maintext');
	return value;
}

function setValue(theValue){
	localStorage.setItem('maintext', theValue);
}