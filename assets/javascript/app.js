
var clockRunning = false;
//  Variable that will hold our setInterval that runs the timer
var intervalId;
var maxTime = 8;
//hide buttons 
$(".btn").hide();
$("#start").show();
var trivia = {
  time: maxTime,
  score: 0,
  answered: false,
  //array of trivia questions
  questions: ["What is the earliest surviving system of laws?", "What was the last battle of the Napoleonic Wars?", "Who was the first democraticaly elected President of Russia?", "What war was triggered by the shooting of a pig?", "Who did the Austrian army attack in the Battle of Karánsebes?", "What hurricane struck the Gulf Coast of the United States in 2005?", "What year was the first Internet domain registered?"],
  answ1: ["Code of Hammurabi", "Battle of Wavre", "Mikhail Gorbachev", "War of Baghdad", "Hungary", "Katrina", "1990"],
  answ2: ["Rosetta Stone", "Battle of the Nile", "Nikita Krushchev", "Pig War", "Austria", "Audrey", "1985"],
  answ3: ["Torah", "Battle of Waterloo", "Boris Yeltsin", "Kish-Ilam War", "Prussia", "Ynah", "2000"],
  correct: ["Code of Hammurabi", "Battle of Wavre", "Boris Yeltsin", "Pig War", "Austria", "Katrina", "1985"],

  start: function () {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      clearInterval(intervalId);
      intervalId = setInterval(trivia.count, 1000);
    }

  },
  count: function () {

    //  TODO: increment time by 1, remember we cant use "this" here.
    trivia.time--;
    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.

    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $("#start-button").html("Time left: " + trivia.time + " sec");
    if (trivia.time === 0) {
      trivia.time = maxTime;
    }
  },

}
// Variable showTrivia will hold the setInterval when we start the slideshow
var showTrivia;
var showTrivia2;
var count = 0;

//  Use jQuery to run "startTrivia" when we click the "start" button.
$("#start").on("click", startTrivia);


// Use jQuery to run "stopTrivia" when we click the "stop" button.
$("#stop").on("click", stopTrivia);

// This function will replace trivia based on array count
function displayTrivia() {

  //   $("#start-button").html(trivia.time);
  trivia.answered = false;
  $("#question-holder").html("<h2>" + trivia.questions[count] + "</h2>");
  //display answers
  $("#answ1").text(trivia.answ1[count]);
  $("#answ2").text(trivia.answ2[count]);
  $("#answ3").text(trivia.answ3[count]);

  $("#answ1").on("click", checkAnswer1);
  $("#answ2").on("click", checkAnswer2);
  $("#answ3").on("click", checkAnswer3);
  $("#score").text("score: " + trivia.score);
  console.log(trivia.correct[count])
  console.log(count)

}
function checkAnswer1() {
  if (trivia.answ1[count] === trivia.correct[count] && trivia.answered === false) {
    $("#subs").html("<h2>" + trivia.answ1[count] + " was correct!" + "</h2>");
    trivia.answered = true;
    trivia.score++;
    trivia.time = 8;
    setTimeout(nextTrivia,1000);
  }
 
}
function checkAnswer2() {
  if (trivia.answ2[count] === trivia.correct[count] && trivia.answered === false) {
    $("#subs").html("<h2>" + trivia.answ2[count] + " was correct!" + "</h2>");
    trivia.answered = true;
    trivia.score++;
    trivia.time = 8;
    clearInterval(showTrivia);
    setTimeout(nextTrivia,1000);
  }
  
}
function checkAnswer3() {
  if (trivia.answ3[count] === trivia.correct[count] && trivia.answered === false) {
    $("#subs").html("<h2>" + trivia.answ3[count] + " was correct!" + "</h2>");
    trivia.answered = true;
    trivia.score++;
    trivia.time = 8;
    clearInterval(showTrivia);
    setTimeout(nextTrivia,1000);
  }

}
function nextTrivia() {

  // Increment the count by 1.
  count++;

  // Use a setTimeout to run displayTrivia after 1 second of pushing button
  //setTimeout(displayTrivia,5000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === trivia.questions.length) {
    count = 0;
  }
  displayTrivia();
}
function startTrivia() {
  $(".btn").show();
  $("#start").hide();
  //start trivia timer
  trivia.start();


  // Use showTrivia to hold the setInterval to run nextTrivia.
  displayTrivia();
  clearInterval(showTrivia);
  showTrivia = setInterval(nextTrivia, 8000);
}
function stopTrivia() {

  // TODO: Put our clearInterval here:
  clearInterval(showTrivia);
}



