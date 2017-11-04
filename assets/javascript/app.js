$("#quizStart").on("click", startQuizzing);

var timerNumber = 20;
var intervalId;
var q1Correct = false;
var q2Correct = false;
var q3Correct = false;
var q4Correct = false;
var q5Correct = false;
var score = 0;
var missed = 5;
var retry;


function startQuizzing () {

	$("#pageContent").html("<div id='timer'></div> <div id='question1'></div> <div id='question2'></div> <div id='question3'></div> <div id='question4'></div> <div id='question5'></div> <div id='submit'></div> <div id='submitButton'></div> ");

	intervalId = setInterval(decrement, 1000);

	function decrement () {

		timerNumber--;

		$("#timer").html("<h1 style='margin-bottom:50px;'>Time remaining: " + timerNumber + "</h1>");

		if (timerNumber === 0) {

			stop();

			//display end results!!!
			alert("Time's Up!");

			function quizGrading () {
				//check answer of q1
				var q1Response = $('input[name=q1]:checked', '#question1').val();
				if (q1Response === 'saturn') {
					q1Correct = true;
					score ++;
					missed --;
				};

				//check answer of q2
				var q2Response = $('input[name=q2]:checked', '#question2').val();
				if (q2Response === 'russia') {
					q2Correct = true;
					score ++;
					missed --;
				};

				//check answer of q3
				var q3Response = $('input[name=q3]:checked', '#question3').val();
				if (q3Response === 'mars') {
					q3Correct = true;
					score ++;
					missed --;
				};

				//check answer of q4
				var q4Response = $('input[name=q4]:checked', '#question4').val();
				if (q4Response === 'waterBear') {
					q4Correct = true;
					score ++;
					missed --;
				};

				//check answer of q5
				var q5Response = $('input[name=q5]:checked', '#question5').val();
				if (q5Response === 'cassini') {
					q5Correct = true;
					score ++
					missed --;
				};

				// alert("your score is: " + score);
				console.log(score);
				console.log(missed);

				$("#pageContent").html("<h2>You Finished the Quiz!</h2> <br> <h3>Correct Answers: " + score + "<br><br> Incorrect Answers: " + missed + "</h3> <br> <br> <button style='background-color:#4CAF50; border:none; color:white; font-family: Orbitron, sans-serif; padding: 15px 30px; font-size:30px; text-align:center;' id='retryButton'>RETRY</button>");

				$("#retryButton").on('click', reloadFunction);
				function reloadFunction() {
					location.reload();
				}

			};

			quizGrading();

		};
	};
	//question1
	$("#question1").html("<h3><u>Question 1</u><br>Which of these planets has the most moons/natural satellites?</h3> <h4> <form action=''> <input type='radio' name='q1' value='saturn'> Saturn <br> <input type='radio' name='q1' value='mars'> Mars <br> <input type='radio' name='q1' value='uranus'> Uranus <br> </form> </h4>");


	//quesiton2
	$("#question2").html("<h3><u>Question 2</u><br>Which of these two has the the greater surface area?</h3> <h4> <form action=''> <input type='radio' name ='q2' value='pluto'> Pluto <br> <input type='radio' name='q2' value='russia'> Russia <br> </form> </h4>");


	//question3
	$("#question3").html("<h3><u>Question 3</u><br>What did the Curiosity rover explore?</h3> <h4> <form action=''> <input type='radio' name='q3' value='venus'> Venus <br> <input type='radio' name='q3' value='moon'> Moon (Earth) <br> <input type='radio' name='q3' value='enceladus'> Enceladus <br> <input type='radio' name='q3' value='mars'> Mars <br> </form> </h4>");


	//question4
	$("#question4").html("<h3><u>Question 4</u><br>Which of these were able to survive the vacuume of space?</h3> <h4> <form action=''> <input type='radio' name='q4' value='waterBear'> Water Bears <br> <input type='radio' name='q4' value='flu'> The Flu Virus <br> <input type='radio' name='q4' value='amoebas'> Amoebas <br> <input type='radio' name='q4' value='cockroaches'> Cockroaches <br> </form> </h4>");


	//question5
	$("#question5").html("<h3><u>Question 5</u><br>Which space probe just made a spectacular end to its mission by self-destructing via flying straight into Saturn?</u></h3> <h4> <form action=''> <input type='radio' name='q5' value='newHorizons'> New Horizons <br> <input type='radio' name='q5' value='cassini'> Cassini <br> <input type='radio' name='q5' value='opportunity'> Opportunity <br> <input type='radio' name='q5' value='rosetta'> Rosetta <br> </form> </h4>");

	//submit button
	$("#submitButton").html("<button style='background-color:#4CAF50; border:none; color:white; font-family: Orbitron, sans-serif; padding: 15px 30px; font-size:30px; text-align:center;'>SUBMIT</button>");
	
	$("#submitButton").click(function(){ 
		//check answer of q1
				var q1Response = $('input[name=q1]:checked', '#question1').val();
				if (q1Response === 'saturn') {
					q1Correct = true;
					score ++;
					missed --;
				};

				//check answer of q2
				var q2Response = $('input[name=q2]:checked', '#question2').val();
				if (q2Response === 'russia') {
					q2Correct = true;
					score ++;
					missed --;
				};

				//check answer of q3
				var q3Response = $('input[name=q3]:checked', '#question3').val();
				if (q3Response === 'mars') {
					q3Correct = true;
					score ++;
					missed --;
				};

				//check answer of q4
				var q4Response = $('input[name=q4]:checked', '#question4').val();
				if (q4Response === 'waterBear') {
					q4Correct = true;
					score ++;
					missed --;
				};

				//check answer of q5
				var q5Response = $('input[name=q5]:checked', '#question5').val();
				if (q5Response === 'cassini') {
					q5Correct = true;
					score ++
					missed --;
				};

				// alert("your score is: " + score);
				console.log(score);
				console.log(missed);

				$("#pageContent").html("<h2>You Finished the Quiz!</h2> <br> <h3>Correct Answers: " + score + "<br><br> Incorrect Answers: " + missed + "</h3> <br> <br> <button style='background-color:#4CAF50; border:none; color:white; font-family: Orbitron, sans-serif; padding: 15px 30px; font-size:30px; text-align:center;' id='retryButton'>RETRY</button>");

				$("#retryButton").on('click', reloadFunction);
				function reloadFunction() {
					location.reload();
				}
	});



};

