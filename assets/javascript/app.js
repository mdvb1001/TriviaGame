var game = {
	questions: [{
		q:"Which pilot won the World Championship in 1988?",
		a:"Ayrton Senna",
		possible:["Juan Manuel Fangio", "Alain Prost", "Michael Schumacher", "Ayrton Senna"]
	}, {
		q:"Niki Lauda beat Alain Prost to the 1984 championship by the smallest points margin in F1 history, what was it?",
		a:".5",
		possible:["1", "1.5", "9", ".5"]
	}, {
		q:"How many F1 World Championships does Michael Schumacher have between them?",
		a:"91",
		possible: ["71", "81", "91", "90"]
	}] 
};



console.log(game.questions[0].q);  //prints the question
console.log(game.questions[0].possible); //prints possible answers
// this puts the correct answer in an array with the possible answers
console.log(game.questions[0].possible.concat([game.questions[0].a]));  


$('#hello').html(game.questions[0].q);
$('#tomorrow').append( "<p><div class='col-xs-3'> <label><input type='radio' name='optionsRadios' id='optionsRadios1' value='1'></label></div></p>");




// $('#myForm input').on('change', function() {
//    alert($('input[name=radioName]:checked', '#myForm').val()); 
// });