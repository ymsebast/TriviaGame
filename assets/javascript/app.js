
var clockRunning = false;
//  Variable that will hold our setInterval that runs the timer
var intervalId;
var maxTime = 8;
var trivia = {
    time: maxTime,
    score: 0,
    answered: false,
    //array of trivia questions
    questions: ["What is the earliest surviving system of laws?","What was the last battle of the Napoleonic Wars?","Who was the first democratically elected President of Russia?"],
    answ1: ["Code of Hammurabi","Battle of Wavre","Mikhail Gorbachev"],
    answ2: ["Rosetta Stone","Battle of the Nile","Nikita Krushchev"],
    answ3: ["Torah","Battle of Waterloo","Boris Yeltsin"],
    correct: ["Code of Hammurabi","Battle of Wavre","Boris Yeltsin"],
    
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
    $("#start-button").html("Time left: " +  trivia.time  + " sec" );
    if(trivia.time === 0)
    {
        trivia.time=maxTime;
    }
  },

}
// Variable showTrivia will hold the setInterval when we start the slideshow
var showTrivia;

var count = 0;

//  Use jQuery to run "startTrivia" when we click the "start" button.
$("#start").on("click",startTrivia);
//start trivia timer
$("#start").click(trivia.start);

// Use jQuery to run "stopTrivia" when we click the "stop" button.
$("#stop").on("click",stopTrivia);

// This function will replace trivia based on array count
function displayTrivia() { 

 //   $("#start-button").html(trivia.time);
    trivia.answered = false;
    $("#question-holder").html("<h2>" + trivia.questions[count] + "</h2>");
    //display answers
    $("#answ1").text(trivia.answ1[count]);
    $("#answ2").text(trivia.answ2[count]);
    $("#answ3").text(trivia.answ3[count]);

    $("#answ1").on("click",checkAnswer1);
    $("#answ2").on("click",checkAnswer2);
    $("#answ3").on("click",checkAnswer3);
    $("#score").text("score: " + trivia.score);
  
}
function checkAnswer1(){
    if(trivia.answ1[count] === trivia.correct[count] && trivia.answered === false){
        //alert(trivia.answ1[count] + " is correct!");
        trivia.answered = true;
        trivia.score++;
        return;
    }
}
function checkAnswer2(){
    if(trivia.answ2[count] === trivia.correct[count] && trivia.answered === false){
        //alert(trivia.answ2[count] + " is correct!");
        trivia.answered = true;
        trivia.score++;
        return;
    }
}
function checkAnswer3(){
    if(trivia.answ3[count] === trivia.correct[count] && trivia.answered === false){
        //alert(trivia.answ3[count] + " is correct!");
        trivia.answered = true;
        trivia.score++;
        return;
    }
}
function nextTrivia() {

  // Increment the count by 1.
  count++;

  // Use a setTimeout to run displayTrivia after 1 second of pushing button
  //setTimeout(displayTrivia,5000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if(count === trivia.questions.length)
  {
    count = 0;
  }
  displayTrivia();
}
function startTrivia() {
  $("#start").hide();
  // Use showTrivia to hold the setInterval to run nextTrivia.
  displayTrivia();
  clearInterval(showTrivia);
  showTrivia = setInterval(nextTrivia,8000);
}
function stopTrivia() {

  // TODO: Put our clearInterval here:
  clearInterval(showTrivia);
}



