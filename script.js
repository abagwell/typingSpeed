const textWrapper = document.querySelector('.text-wrapper');
const textArea = document.querySelector('#textArea');
const originText = document.querySelector('.text');
const resetButton = document.querySelector('#reset');
const timer = document.querySelector('.timer');

var interval = null;

textArea.addEventListener('keypress', checkText, false);
textArea.addEventListener('keyup', checkText, false);
textArea.addEventListener('click', textTimer, false);
resetButton.addEventListener('click', buttonTimer, false);


function runClock() {

	console.log("in run clock");
	console.log(timer.innerHTML);

	var parseTime = timer.innerHTML.split(":");
	var priorSec = (parseInt(parseTime[2]));
	var seconds = (parseInt(parseTime[2])+ 1) % 60;
	var minutes = parseInt(parseTime[1]) % 60;
	var hours = parseInt(parseTime[0]) % 60;
	
	if (priorSec === 59)
		minutes++;

	if (minutes === 59) {
		minutes++;
		hours++; 
	}

	timer.innerHTML = (hours < 10 ?  '0' + hours.toString() : hours.toString()) +  ':'  + (minutes < 10 ?  '0' + minutes.toString() : minutes.toString()) + ':' +  (seconds < 10 ?  '0' + seconds.toString() : seconds.toString());

}

function textTimer() {

	console.log('text timer');
	if (timer.innerHTML === '00:00:00') {

		interval = setInterval(runClock, 1000);
	}
}


function checkText() {

	//check if string matches
	if (textArea.value == originText.innerHTML) {

		textWrapper.style.border = " 10px solid green";
		clearInterval(interval);
			
	}

	else {

		textWrapper.style.border = " 10px solid red";
	}
}



function buttonTimer() {

	console.log('button timer');

	if ((timer.innerHTML !== '00:00:00') && (interval !== null)) {

		clearInterval(interval);
		timer.innerHTML = '00:00:00'
	}
	
	interval = setInterval(runClock, 1000);
}


