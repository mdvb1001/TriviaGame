// PHASE 1 -- Get the UI working on basic level
// 
// Bootstrap to create main div
// Ask TA's how to go about this
// 
// 


// PHASE 2 -- Get value from radio buttons 

// Onclick function to start game 
// Onclick function to end game 
// 
// for loop to run through questions
// Create an object to hold questions, answers, and correct answers	
// 	> See object lesson for this (we did a trivia game...)
// set value of radio buttons to a digit. Then, match that digit for the correct answer.





// PHASE 3 -- Get timer/interval working
// 
// Function for count down timer, ends game once time runs out 
// this includes .setInterval()	
// 
// 
// 
// 

function result() {
    $('input:checked').each(function() {
        for (var i = 0; i < game.questions.length; i++) {
            answerKey = game.questions[i].possible.indexOf(game.questions[i].a);
        }
        if ($(this).index() === answerKey) {
            wins++;
        } else if ($(this).index() !== answerKey) {
            loses++
        }
        notAnswered = (game.questions.length - wins) - loses;

    });
    console.log('these are my wins:' + ' ' + wins);
    console.log('these are my loses:' + ' ' + loses);