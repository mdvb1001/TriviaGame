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
        q: "How many F1 World Championships does Michael Schumacher have between them?",
        a: "91",
        possible: ["71", "81", "91", "90"]
    }]
};



console.log(game.questions[0].q); //prints the question
console.log(game.questions[0].possible); //prints possible answers
// this puts the correct answer in an array with the possible answers
console.log(game.questions[0].possible.concat([game.questions[0].a]));

$(document).ready(function() {
            $(".btn-primary").click(function() {
                $(".start").hide();
            });

            var one1 = game.questions[0].possible[0];
            var two1 = game.questions[0].possible[1];
            var three1 = game.questions[0].possible[2];
            var four1 = game.questions[0].possible[3];

            $('#question1').html(game.questions[0].q);
            $('#answers1').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + one1 + " " + "</div></div>");
            $('#answers1').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + two1 + " " + "</div></div>");
            $('#answers1').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + three1 + " " + "</div></div>");
            $('#answers1').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + four1 + " " + "</div></div>");


            var one2 = game.questions[1].possible[0];
            var two2 = game.questions[1].possible[1];
            var three2 = game.questions[1].possible[2];
            var four2 = game.questions[1].possible[3];

            $('#question2').html(game.questions[1].q);
            $('#answers2').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + one2 + " " + "</div></div>");
            $('#answers2').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + two2 + " " + "</div></div>");
            $('#answers2').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + three2 + " " + "</div></div>");
            $('#answers2').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + four2 + " " + "</div></div>");

            var one3 = game.questions[2].possible[0];
            var two3 = game.questions[2].possible[1];
            var three3 = game.questions[2].possible[2];
            var four3 = game.questions[2].possible[3];

            $('#question3').html(game.questions[2].q);
            $('#answers3').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + one3 + " " + "</div></div>");
            $('#answers3').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + two3 + " " + "</div></div>");
            $('#answers3').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + three3 + " " + "</div></div>");
            $('#answers3').append("<div> <div><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'>" + " " + four3 + " " + "</div></div>");

        });



        // $('#myForm input').on('change', function() {
        //    alert($('input[name=radioName]:checked', '#myForm').val()); 
        // });
