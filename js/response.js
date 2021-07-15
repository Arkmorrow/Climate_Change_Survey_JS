
//General information about the participant
var age = localStorage.getItem("age");
var gender = localStorage.getItem("gender");
var suburb = localStorage.getItem("suburb");
var state = localStorage.getItem("state");
var country = localStorage.getItem("country");

document.getElementsByName("age")[0].value = age;
document.getElementsByName("gender")[0].value = gender;
document.getElementsByName("suburb")[0].value = suburb;
document.getElementsByName("state")[0].value = state;
document.getElementsByName("country")[0].value = country;

//q1 value
var q1 = localStorage.getItem("question1");
document.getElementsByName("q1")[0].value =q1;

//q2 value
var q2 = localStorage.getItem("question2");
var q2_list = q2.split(",")
var str = '<ul style="list-style-type:circle">'
q2_list.forEach(function(slide) {
  str += '<li>'+ slide + '</li>';
}); 
str += '</ul>';
document.getElementById("q2").innerHTML = str;

//q3 value
var q3 = localStorage.getItem("question3");
var q3_list = q3.split(",")
str = '<ul style="list-style-type:circle">'
q3_list.forEach(function(slide) {
  str += '<li>'+ slide + '</li>';
}); 
str += '</ul>';
document.getElementById("q3").innerHTML = str;

//q4 value
var q4 = localStorage.getItem("question4");
document.getElementsByName("q4")[0].value =q4;

//q5 value
var q5 = localStorage.getItem("question5");
var q5_list = q5.split(",")
str = '<ul style="list-style-type:circle">'
q5_list.forEach(function(slide) {
  str += '<li>'+ slide + '</li>';
}); 
str += '</ul>';
document.getElementById("q5").innerHTML = str;

//q6 value
var q6 = localStorage.getItem("question6");
document.getElementsByName("q6")[0].value =q6;

//q7 value
var q7 = localStorage.getItem("question7");
var q7_list = q7.split(",")
str = '<ul style="list-style-type:circle">'
q7_list.forEach(function(slide) {
  str += '<li>'+ slide + '</li>';
}); 
str += '</ul>';
document.getElementById("q7").innerHTML = str;

//q8 value
var q8 = localStorage.getItem("question8");
var q8_list = q8.split(",")
str = '<ul style="list-style-type:circle">'
q8_list.forEach(function(slide) {
  str += '<li>'+ slide + '</li>';
}); 
str += '</ul>';
document.getElementById("q8").innerHTML = str;

//q9 value
var q9 = localStorage.getItem("question9");
document.getElementsByName("q9")[0].value =q9;

//q10 value
var q10 = localStorage.getItem("question10");
document.getElementsByName("q10")[0].value =q10;

//re_submit function
function resubmit(){
	window.location = "homepage.html";
}







