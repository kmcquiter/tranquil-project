function submitAnswers(){
	let total = 4;
	let score = 0;
	
	// Get User Input
	let q1 = document.forms["quizForm"]["q1"].value;
	let q2 = document.forms["quizForm"]["q2"].value;
	let q3 = document.forms["quizForm"]["q3"].value;
	let q4 = document.forms["quizForm"]["q4"].value;
	
	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
			return false;
		}
	}
	
	// Set Answers ( using points to show to the user what the should do in the "your plan".
	let answers = ["b","a","d","b"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	let results = document.querySelector('.results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert('You scored '+score+' out of ' +total);
	
	return false;
}
