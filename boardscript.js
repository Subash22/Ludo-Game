var i = 1;
var images = [];

images[1] = 'Images/dice1.png'
images[2] = 'Images/dice2.png'
images[3] = 'Images/dice3.png'
images[4] = 'Images/dice4.png'
images[5] = 'Images/dice5.png'
images[6] = 'Images/dice6.png'

function yellowroll(){
	i = Math.floor(Math.random() * 6) + 1;
	document.dice.src = images[i];
}

function greenroll(){
	i = Math.floor(Math.random() * 6) + 1;
	document.dice.src = images[i];
}

function blueroll(){
	i = Math.floor(Math.random() * 6) + 1;
	document.dice.src = images[i];
}

function redroll(){
	i = Math.floor(Math.random() * 6) + 1;
	document.dice.src = images[i];
}