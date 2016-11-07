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
var wins = 0;
var loses = 0;
var notAnswered;
var answerKey = '';
/** This variable holds all the questions, answer and possible answers */
var game = {
    questions: [{
        q: "Which pilot won the World Championship in 1988?",
        a: "Ayrton Senna",
        possible: ["Juan Manuel Fangio", "Alain Prost", "Michael Schumacher", "Ayrton Senna"]
    }, {
        q: "Niki Lauda beat Alain Prost to the 1984 championship by the smallest points margin in F1 history, what was it?",
        a: ".5",
        possible: ["1", "1.5", "9", ".5"]
    }, {
        q: "How many F1 Grand Prix did Michael Schumacher win in his career?",
        a: "91",
        possible: ["71", "81", "91", "90"]
    }, {
        q: "Who was the French Formula One champion known as The Professor?",
        a: "Alain Prost",
        possible: ["Jean Alesi", "Alain Prost", "Olivier Panis", "Didier Pironi"]
    }, {
        q: "I was the Formula 1 World Champion three times and would probably have won more Championships if I wasn't killed in a crash at Imola while leading the race. I was especially talented in the rain. Who am I?",
        a: "Ayrton Senna",
        possible: ["Ayrton Senna", "Gilles Villeneuve", "Nigel Mansell", "Ralph Schumacher"]
    }, {
        q: "I was the first German World Champion and I liked it, because I repeated it for 6 more times. What is my name?",
        a: "Michael Schumacher",
        possible: ["Mika Häkkinen", "Jochen Rindt", "Michael Schumacher", "Keke Rosberg"]
    }, {
        q: "In what year did 11 different drivers win at least a Grand Prix, but no one won more than 2.",
        a: "1982",
        possible: ["1980", "1981", "1982", "1984"]
    }, {
        q: "Politics were still rife in 1982, and the San Marino Grand Prix saw how many cars turn up to compete?",
        a: "14",
        possible: ["26", "21", "18", "14"]
    }, {
        q: "How many laps did the 1984 Monaco Grand Prix run for, before it was stopped due to torrential rain?",
        a: "31",
        possible: ["12", "52", "42", "31"]
    }, {
        q: "Which driver collapsed, after famously pushing his stricken car over the line at the 1984 Dallas Grand Prix?",
        a: "Nigel Mansell",
        possible: ["Nelson Picket", "Niki Lauda", "Nigel Mansell", "Mario Andretti"]
    }, {
        q: "At which track did Alain Prost record his 28th Grand Prix victory, beating Jackie Stewart's record that had stood since 1973?",
        a: "Estoril",
        possible: ["Estoril", "Zolder", "Nürburgring", "San Marino"]
    }, {
        q: "From which grid position, did Nigel Mansell win the 1989 Hungarian Grand Prix?",
        a: "12",
        possible: ["6", "8", "12", "14"]
    }, {
        q: "Why was Nelson Piquet's 1983 championship win special?",
        a: "First Turbo Champion",
        possible: ["It was his last", "First Turbo Champion", "First Brasilian Champion", "It was his first"]
    }]
};
console.log(game.questions[0].q); //prints the question
console.log(game.questions[0].possible); //prints possible answers
// this puts the correct answer in an array with the possible answers
console.log(game.questions[0].possible.concat([game.questions[0].a]));
$(document).ready(function () {
    /** This brings up the start button that leads to the questions */
    $(".end").hide();
    $(".main").hide();
    $(".start").show();
    /** This starts the timer and shows the questions div (.main) */
    $("#startButton").click(function () {
        $(".start").hide();
        $(".main").show();
        run();
    });
    /** This function dynamically displays all the questions in .main div */
    display();
    /** This dynamic button brings up the results of the game */
    $('#submit').on('click', function () {
        stop();
        $(".main").hide();
        result();
    });
});
/** This function dynamically displays all the questions in .main div via the .allQuestions div  */
function display() {
    for (var i = 0; i < game.questions.length; i++) {
        var trivia = game.questions[i].q;
        console.log(trivia);
        $('.allQuestions').append("<div><h4>" + trivia + "</h4></div>");
        for (var j = 0; j < game.questions[i].possible.length; j++) {
            var options = game.questions[i].possible[j];
            console.log(options);
            $('.allQuestions').append("<div><input type='radio' data-question-index='" + i + "' data-index='" + j + "' name='question" + i + "' value='" + game.questions[i].possible[j] + "'>" + " " + options + " " + "</div>");
        }
    }
}
/** This dynamic button brings up the results of the game played */
function result() {
    $('input:checked').each(function () {
        var r = $(this).data('question-index');
        console.log('question index: ' + game.questions[r].a);
        console.log('question answer: ' + $(this).val());
        if ($(this).val() === game.questions[r].a) {
            wins++;
        } else if ($(this).val() !== undefined) {
            loses++;
        }
    });
    notAnswered = (game.questions.length - wins) - loses;
    console.log('these are my wins:' + ' ' + wins);
    console.log('these are my loses:' + ' ' + loses);
    $('.end').append("<p class='results'>RESULTS</p>"); // Title of results  
    $('.end').append("<p>Questions you got right: " + wins + '</p>'); // wins
    $('.end').append("<p>Questions you got wrong: " + loses + '</p>'); // loses
    $('.end').append("<p>Questions you did not answer: " + notAnswered + '</p>');
    $(".end").show(); // the print the results in HTML 
}
var number = 100;

function run() {
    counter = setInterval(decrement, 1000);
}
// The decremeent function.
function decrement() {
    // Decrease number by one.
    number--;
    // Show the number in the #show-number tag.
    $('#timer').html("<div class='timerDisplay col-xs-3''>" + "Time Left: " + number + " sec" + "</div>");
    // Once number hits zero...
    if (number === 0) {
        // ...run the stop function.
        stop();
        // Alert the user that time is up.
        $(".main").hide();
        result();
    }
}
// The stop function
function stop() {
    // Clears our "counter" interval.
    // We just pass the name of the interval
    // to the clearInterval function.
    clearInterval(counter);
    number = 0;
}