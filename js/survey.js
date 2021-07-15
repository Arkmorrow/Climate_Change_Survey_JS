//get gender value
var gender
function gender_function(a) {
            gender = a;
    }
//get value for q1
var question1
function q1_function(a) {
            question1 = a;
    }
//get value for q2
var question2=[]
function q2_function(a) {
            question2.push(a);
    }
//get value for q3
var question3=[]
function q3_function(a) {
            question3.push(a);
    }
//get value for q4
var question4
function q4_function(a) {
            question4 = a;
    }
//get value for q5
var question5=[]
function q5_function(a) {
            question5.push(a);
    }
//get value for q6
var question6
function q6_function(a) {
            question6 = a;
    }
//get value for q7
var question7=[]
function q7_function(a) {
            question7.push(a);
    }
//get value for q8
var question8=[]
function q8_function(a) {
            question8.push(a);
    }
//get value for q10
var question10
function q10_function(a) {
            question10 = a;
    }

// JavaScript validate
function validate() {
  var q2 = document.forms["myForm"]["where"];
  var q3 = document.forms["myForm"]["what"];
  var q5 = document.forms["myForm"]["who"];
  var q7 = document.forms["myForm"]["are_aware_put"];
  var q8 = document.forms["myForm"]["are_aware_aimed"];

  if (
    q2[0].checked == false &&
    q2[1].checked == false &&
    q2[2].checked == false &&
	q2[3].checked == false &&
    q2[4].checked == false &&
    q2[5].checked == false &&
	q2[6].checked == false &&
    q2[7].checked == false &&
    q2[8].checked == false
  ) {
    alert("Please fill all questions before submit")
    return false;
  } 
  else if (
    q3[0].checked == false &&
    q3[1].checked == false &&
    q3[2].checked == false &&
	q3[3].checked == false &&
    q3[4].checked == false &&
    q3[5].checked == false &&
	q3[6].checked == false
  ) {
    alert("Please fill all questions before submit")
    return false;
  } 
  else if (
    q5[0].checked == false &&
    q5[1].checked == false &&
    q5[2].checked == false &&
	q5[3].checked == false &&
    q5[4].checked == false 
 ) {
    alert("Please fill all questions before submit")
    return false;
  } 
  else if (
    q7[0].checked == false &&
    q7[1].checked == false &&
    q7[2].checked == false &&
	q7[3].checked == false &&
    q7[4].checked == false 
  ) {
    alert("Please fill all questions before submit")
    return false;
  } 
  else if (
    q8[0].checked == false &&
    q8[1].checked == false &&
    q8[2].checked == false &&
	q8[3].checked == false &&
    q8[4].checked == false &&
    q8[5].checked == false
  ) {
    alert("Please fill all questions before submit")
    return false;
  }else {
	//save value to the local storage
    var age = document.getElementsByName("age")[0].value;
	var suburb = document.getElementsByName("suburb")[0].value;
	var state = document.getElementsByName("state")[0].value;
	var country = document.getElementsByName("country")[0].value;
	var question9 = document.getElementsByName("what_approach")[0].value;
	
	localStorage.setItem("age", age);
	localStorage.setItem("gender", gender);
	localStorage.setItem("suburb", suburb);
	localStorage.setItem("state", state);
	localStorage.setItem("country", country);
	localStorage.setItem("question1", question1);
	localStorage.setItem("question2", question2);
	localStorage.setItem("question3", question3);
	localStorage.setItem("question4", question4);
	localStorage.setItem("question5", question5);
	localStorage.setItem("question6", question6);
	localStorage.setItem("question7", question7);
	localStorage.setItem("question8", question8);
	localStorage.setItem("question9", question9);
	localStorage.setItem("question10",question10);

	return true;
  }
}



