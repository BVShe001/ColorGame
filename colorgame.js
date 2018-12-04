var game = {};
// game.func= function(){};

var initial_no =6;
var colors = getRandomColors(initial_no);
var pickedColor = colors[Math.floor(Math.random()*colors.length)];
var squares = document.getElementsByClassName("square");
var display = document.querySelector("#display");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var new_game_btn = document.querySelector("#reset");
var easy_btn = document.querySelector("#easybtn");
var hard_btn = document.querySelector("#hardbtn");

init();

function init(){
	setUpButtonListeners();
	setUpSquares();
	reset();
}

function setUpButtonListeners(){
	new_game_btn.addEventListener("click",reset);
	new_game_btn.addEventListener("mouseover",function(){
		this.classList.add("color");
	});
	new_game_btn.addEventListener("mouseout",function(){
		this.classList.remove("color");
	});

	easy_btn.addEventListener("click",function(){
		hard_btn.classList.remove("color");
		this.classList.add("color");
		initial_no = 3;
		reset();
	});

	hard_btn.addEventListener("click",function(){
		easy_btn.classList.remove("color");
		this.classList.add("color");
		initial_no = 6;
		reset();
	});
};

function setUpSquares(){
	for(var i=0; i<squares.length; ++i){
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				display.textContent = "Correct:)";
				colorAll();
				h1.style.background = clickedColor;
				new_game_btn.textContent = "Play Again!";
			} else {
				this.style.background = "#232323";
				display.textContent = "Try Again!";
			}
			console.log(clickedColor + "   "+ pickedColor);
		});
	}
}

function getRandomColors(no){
	var colours = [];
	for(var i=0; i<no; ++i){
			colours.push("rgb("+ Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256)+")");
	}
	return colours;
};
function colorAll(){
	for(var i=0;i<squares.length;++i){
		squares[i].style.background = pickedColor;
	}
};

function reset(){
	h1.style.background = "steelblue";
	colors = getRandomColors(initial_no);
	console.log(colors);
	pickedColor = colors[Math.floor(Math.random()*colors.length)];
	for(var i=0;i<colors.length;++i){
		squares[i].style.background = colors[i];
	}
	i=3;
	while(i<squares.length){
		if(initial_no == 3)
			squares[i].style.display = "none";
		else
			squares[i].style.display = "block";
		i++;
	}
			
	colorDisplay.textContent = pickedColor;
	display.textContent = "";
	new_game_btn.textContent = "New Colors!";
};