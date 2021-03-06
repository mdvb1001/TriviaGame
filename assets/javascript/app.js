var wins = 0;
var loses = 0;
var notAnswered = 0;
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
        possible: ["It was his last", "First Turbo Champion", "First Brasilian Champion", "It was his last"]
    }]
};
console.log(game.questions[0].q); //prints the question
console.log(game.questions[0].possible); //prints possible answers
// this puts the correct answer in an array with the possible answers
console.log(game.questions[0].possible.concat([game.questions[0].a]));
$(document).ready(function () {
    $(".end").hide();
    $(".main").hide();
    $(".start").show();
    $("#startButton").click(function () {
        $(".start").hide();
        $(".main").show();
        run();
    });
    var one1 = game.questions[0].possible[0];
    var two1 = game.questions[0].possible[1];
    var three1 = game.questions[0].possible[2];
    var four1 = game.questions[0].possible[3];
    $('#question1').html(game.questions[0].q);
    $('#answers1').append("<div><div><input type='radio' name='question1' value='8'>" + " " + one1 + " " + "</div></div>");
    $('#answers1').append("<div><div><input type='radio' name='question1' value='8'>" + " " + two1 + " " + "</div></div>");
    $('#answers1').append("<div><div><input type='radio' name='question1' value='8'>" + " " + three1 + " " + "</div></div>");
    $('#answers1').append("<div><div><input type='radio' name='question1' value='1'>" + " " + four1 + " " + "</div></div>");
    var one2 = game.questions[1].possible[0];
    var two2 = game.questions[1].possible[1];
    var three2 = game.questions[1].possible[2];
    var four2 = game.questions[1].possible[3];
    $('#question2').html(game.questions[1].q);
    $('#answers2').append("<div><div><input type='radio' name='question2' value='8'>" + " " + one2 + " " + "</div></div>");
    $('#answers2').append("<div><div><input type='radio' name='question2' value='8'>" + " " + two2 + " " + "</div></div>");
    $('#answers2').append("<div><div><input type='radio' name='question2' value='8'>" + " " + three2 + " " + "</div></div>");
    $('#answers2').append("<div><div><input type='radio' name='question2' value='1'>" + " " + four2 + " " + "</div></div>");
    var one3 = game.questions[2].possible[0];
    var two3 = game.questions[2].possible[1];
    var three3 = game.questions[2].possible[2];
    var four3 = game.questions[2].possible[3];
    $('#question3').html(game.questions[2].q);
    $('#answers3').append("<div><div><input type='radio' name='question3' value='8'>" + " " + one3 + " " + "</div></div>");
    $('#answers3').append("<div><div><input type='radio' name='question3' value='8'>" + " " + two3 + " " + "</div></div>");
    $('#answers3').append("<div><div><input type='radio' name='question3' value='1'>" + " " + three3 + " " + "</div></div>");
    $('#answers3').append("<div><div><input type='radio' name='question3' value='8'>" + " " + four3 + " " + "</div></div>");
    var one4 = game.questions[3].possible[0];
    var two4 = game.questions[3].possible[1];
    var three4 = game.questions[3].possible[2];
    var four4 = game.questions[3].possible[3];
    $('#question4').html(game.questions[3].q);
    $('#answers4').append("<div><div><input type='radio' name='question4' value='8'>" + " " + one4 + " " + "</div></div>");
    $('#answers4').append("<div><div><input type='radio' name='question4' value='1'>" + " " + two4 + " " + "</div></div>");
    $('#answers4').append("<div><div><input type='radio' name='question4' value='8'>" + " " + three4 + " " + "</div></div>");
    $('#answers4').append("<div><div><input type='radio' name='question4' value='8'>" + " " + four4 + " " + "</div></div>");
    var one5 = game.questions[4].possible[0];
    var two5 = game.questions[4].possible[1];
    var three5 = game.questions[4].possible[2];
    var four5 = game.questions[4].possible[3];
    $('#question5').html(game.questions[4].q);
    $('#answers5').append("<div><div><input type='radio' name='question5' value='1'>" + " " + one5 + " " + "</div></div>");
    $('#answers5').append("<div><div><input type='radio' name='question5' value='8'>" + " " + two5 + " " + "</div></div>");
    $('#answers5').append("<div><div><input type='radio' name='question5' value='8'>" + " " + three5 + " " + "</div></div>");
    $('#answers5').append("<div><div><input type='radio' name='question5' value='8'>" + " " + four5 + " " + "</div></div>");
    var one6 = game.questions[5].possible[0];
    var two6 = game.questions[5].possible[1];
    var three6 = game.questions[5].possible[2];
    var four6 = game.questions[5].possible[3];
    $('#question6').html(game.questions[5].q);
    $('#answers6').append("<div><div><input type='radio' name='question6' value='8'>" + " " + one6 + " " + "</div></div>");
    $('#answers6').append("<div><div><input type='radio' name='question6' value='8'>" + " " + two6 + " " + "</div></div>");
    $('#answers6').append("<div><div><input type='radio' name='question6' value='1'>" + " " + three6 + " " + "</div></div>");
    $('#answers6').append("<div><div><input type='radio' name='question6' value='8'>" + " " + four6 + " " + "</div></div>");
    var one7 = game.questions[6].possible[0];
    var two7 = game.questions[6].possible[1];
    var three7 = game.questions[6].possible[2];
    var four7 = game.questions[6].possible[3];
    $('#question7').html(game.questions[6].q);
    $('#answers7').append("<div><div><input type='radio' name='question7' value='8'>" + " " + one7 + " " + "</div></div>");
    $('#answers7').append("<div><div><input type='radio' name='question7' value='8'>" + " " + two7 + " " + "</div></div>");
    $('#answers7').append("<div><div><input type='radio' name='question7' value='1'>" + " " + three7 + " " + "</div></div>");
    $('#answers7').append("<div><div><input type='radio' name='question7' value='8'>" + " " + four7 + " " + "</div></div>");
    var one8 = game.questions[7].possible[0];
    var two8 = game.questions[7].possible[1];
    var three8 = game.questions[7].possible[2];
    var four8 = game.questions[7].possible[3];
    $('#question8').html(game.questions[7].q);
    $('#answers8').append("<div><div><input type='radio' name='question8' value='8'>" + " " + one8 + " " + "</div></div>");
    $('#answers8').append("<div><div><input type='radio' name='question8' value='8'>" + " " + two8 + " " + "</div></div>");
    $('#answers8').append("<div><div><input type='radio' name='question8' value='8'>" + " " + three8 + " " + "</div></div>");
    $('#answers8').append("<div><div><input type='radio' name='question8' value='1'>" + " " + four8 + " " + "</div></div>");
    var one9 = game.questions[8].possible[0];
    var two9 = game.questions[8].possible[1];
    var three9 = game.questions[8].possible[2];
    var four9 = game.questions[8].possible[3];
    $('#question9').html(game.questions[8].q);
    $('#answers9').append("<div><div><input type='radio' name='question9' value='8'>" + " " + one9 + " " + "</div></div>");
    $('#answers9').append("<div><div><input type='radio' name='question9' value='8'>" + " " + two9 + " " + "</div></div>");
    $('#answers9').append("<div><div><input type='radio' name='question9' value='8'>" + " " + three9 + " " + "</div></div>");
    $('#answers9').append("<div><div><input type='radio' name='question9' value='1'>" + " " + four9 + " " + "</div></div>");
    var one10 = game.questions[9].possible[0];
    var two10 = game.questions[9].possible[1];
    var three10 = game.questions[9].possible[2];
    var four10 = game.questions[9].possible[3];
    $('#question10').html(game.questions[9].q);
    $('#answers10').append("<div><div><input type='radio' name='question10' value='8'>" + " " + one10 + " " + "</div></div>");
    $('#answers10').append("<div><div><input type='radio' name='question10' value='8'>" + " " + two10 + " " + "</div></div>");
    $('#answers10').append("<div><div><input type='radio' name='question10' value='1'>" + " " + three10 + " " + "</div></div>");
    $('#answers10').append("<div><div><input type='radio' name='question10' value='8'>" + " " + four10 + " " + "</div></div>");
    var one11 = game.questions[10].possible[0];
    var two11 = game.questions[10].possible[1];
    var three11 = game.questions[10].possible[2];
    var four11 = game.questions[10].possible[3];
    $('#question11').html(game.questions[10].q);
    $('#answers11').append("<div><div><input type='radio' name='question11' value='1'>" + " " + one11 + " " + "</div></div>");
    $('#answers11').append("<div><div><input type='radio' name='question11' value='8'>" + " " + two11 + " " + "</div></div>");
    $('#answers11').append("<div><div><input type='radio' name='question11' value='8'>" + " " + three11 + " " + "</div></div>");
    $('#answers11').append("<div><div><input type='radio' name='question11' value='8'>" + " " + four11 + " " + "</div></div>");
    var one12 = game.questions[11].possible[0];
    var two12 = game.questions[11].possible[1];
    var three12 = game.questions[11].possible[2];
    var four12 = game.questions[11].possible[3];
    $('#question12').html(game.questions[11].q);
    $('#answers12').append("<div><div><input type='radio' name='question12' value='8'>" + " " + one12 + " " + "</div></div>");
    $('#answers12').append("<div><div><input type='radio' name='question12' value='8'>" + " " + two12 + " " + "</div></div>");
    $('#answers12').append("<div><div><input type='radio' name='question12' value='1'>" + " " + three12 + " " + "</div></div>");
    $('#answers12').append("<div><div><input type='radio' name='question12' value='8'>" + " " + four12 + " " + "</div></div>");
    var one13 = game.questions[12].possible[0];
    var two13 = game.questions[12].possible[1];
    var three13 = game.questions[12].possible[2];
    var four13 = game.questions[12].possible[3];
    $('#question13').html(game.questions[12].q);
    $('#answers13').append("<div><div><input type='radio' name='question13' value='8'>" + " " + one13 + " " + "</div></div>");
    $('#answers13').append("<div><div><input type='radio' name='question13' value='1'>" + " " + two13 + " " + "</div></div>");
    $('#answers13').append("<div><div><input type='radio' name='question13' value='8'>" + " " + three13 + " " + "</div></div>");
    $('#answers13').append("<div><div><input type='radio' name='question13' value='8'>" + " " + four13 + " " + "</div></div>");
    $('#submit').on('click', function () {
        stop();
        $(".main").hide();
        result();
    });
});

function result() {
    $('input:checked').each(function () {
        if ($(this).val() === '1') {
            wins++;
        } else if ($(this).val() === '8') {
            loses++;
        }
        notAnswered = (game.questions.length - wins) - loses;
    });
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