/* JS block
	comments */

function askQuestions() {

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName = firstName + " " + lastName;

console.log("User\´s name is: " + fullName);
/* you are not storing this anywhere or showing it, it just appears
on the console of the website when you browse it*/

/* the code below is to change your h2 to have the prase "Hello firstName 
lastName"  */
$("h2").text("Hello " + fullName);

/*ask for the age and then get the equivalent of that converted to number*/
var age = prompt("How old are you?");

age = parseInt(age);

/*we are going to make a comparison and then conditional actions
if the user is over 18, then we welcome him*/
if (age >=18) {
	console.log("User is an adult");
	alert("Welcome, adult!");
} 
/*if i want to include more alternatives*/
else if (age >=13) {
	console.log("User is a teenager");
	alert("Come back in a few years!");
} else {
	console.log("User is a child");
	alert("Go away, child!");
}

/* if the user´s first name is "General" and their last name is NOT "assembly",
then greet the general! (Hint : Use and alert() and a console.log())

PS - Test with anybody, and General Assembly, General Somebodyelse*/
/*we have used exact equals === and !== to make it more robust. should work
with only == or !=*/
/*we added  .toLowerCase() so that it becomes case agnostic*/

if (firstName.toLowerCase() === "general" && lastName !== "assembly") {
	
	console.log("User is General NOT Assembly");
	alert("Welcome General!");
} 

var faveColour = prompt("What is your favourite colour?").toLowerCase();
	if (faveColour=="red"||
		faveColour=="green"||
		faveColour=="yellow"||
		faveColour=="blue") {
	/* I can control CSS from JS, it is like overwriting my css. i can 
	also go to CSS and do the changes there, but he thinks in this
	case it is simpler*/

	$("h1").css("color", faveColour);
}

}

// when the page has loaded
$ (function () {

	/*this line below is to ask the questions above when the person 
	clicks the picture*/
	$("img").on("click", askQuestions);



	// Hide all the things when you first load the page
	//$("h3").next().hide()

	// Hide all the things but the first thing when you first load the page
	$("h3").not(":first-of-type").next().hide()

	//when the user clicks on an h3. we can also use "mouseenter"
	//it would be enough to go with the mouse over h3 to display the text
	// instead of "click"
	$("h3").on("click", function() {

		//Close all the sections to leave only 1 section open at the same
		//time 
		$("h3").not(this).next().slideUp(150);


		//Hide/toggle the next element
		$(this).next().slideToggle(150);

		// the word "This" in JS can mean a lot of things in JS, depending
		//on where it is. In our case, it is whatever h3 we come accross first,
		//then it will hide the next element, which in our family tree (see picture)
		// is a paragraph
		// TOGGLE versus HIDE. Toggle was already programmed by someone else
		// and it allows you to hide and unhide. SlideToggle does it smoothly
		// SlideToggle goes with capital T (camelCase). it allows you do do that transition
		//at different speeds - you put it between brackets
	});

});