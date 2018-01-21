////////////////////////
// My name is Simon
// by Andrew Creech 2017
////////////////////////

var Simon = {
	menu: document.getElementById("menu"),
	icons: {
		power: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 49.652 49.652" style="enable-background:new 0 0 49.652 49.652;" xml:space="preserve"><path d="M49.652,24.826C49.652,11.137,38.515,0,24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826    C38.516,49.652,49.652,38.516,49.652,24.826z M27.264,24.788c0,1.302-1.055,2.355-2.355,2.355c-1.301,0-2.356-1.055-2.356-2.355    V12.535c0-1.301,1.055-2.356,2.356-2.356c1.301,0,2.355,1.054,2.355,2.356V24.788z M40.857,24.867    c0,8.839-7.191,16.029-16.031,16.029c-8.84,0-16.031-7.19-16.031-16.029c0-4.285,1.669-8.313,4.701-11.34    c0.46-0.46,1.062-0.689,1.665-0.689s1.207,0.23,1.667,0.691c0.92,0.921,0.919,2.412-0.002,3.332    c-2.139,2.138-3.318,4.981-3.318,8.006c0,6.24,5.077,11.315,11.318,11.315s11.317-5.075,11.317-11.315    c0-3.023-1.176-5.865-3.313-8.003c-0.92-0.921-0.919-2.412,0.001-3.333c0.921-0.921,2.412-0.919,3.333,0.001    C39.189,16.56,40.857,20.586,40.857,24.867z" fill="#263238"/></svg>',
		gameover: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 16.002 16.002" style="enable-background:new 0 0 16.002 16.002;" xml:space="preserve" width="512px" height="512px"><g><path d="M8,0C3.582,0,0,3.584,0,8c0,4.42,3.582,8.002,8,8.002c4.42,0,8.001-3.582,8.001-8.002   C16.001,3.584,12.42,0,8,0z M12.99,10.677l-2.315,2.313l-2.674-2.676L5.326,12.99l-2.314-2.313l2.676-2.678L3.012,5.325   l2.314-2.313l2.675,2.674l2.674-2.674l2.315,2.313l-2.676,2.674L12.99,10.677z" fill="#ef5350"/></g></svg>',
		gamewon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve" width="512px" height="512px"><g><g><path d="M306,612c-28.152,0-55.284-3.672-81.396-11.016c-26.112-7.347-50.49-17.646-73.134-30.906    s-43.248-29.172-61.812-47.736c-18.564-18.562-34.476-39.168-47.736-61.812c-13.26-22.646-23.562-47.022-30.906-73.135    C3.672,361.284,0,334.152,0,306s3.672-55.284,11.016-81.396s17.646-50.49,30.906-73.134s29.172-43.248,47.736-61.812    s39.168-34.476,61.812-47.736s47.022-23.562,73.134-30.906S277.848,0,306,0c42.024,0,81.702,8.058,119.034,24.174    s69.768,37.944,97.308,65.484s49.368,59.976,65.484,97.308S612,263.976,612,306c0,28.152-3.672,55.284-11.016,81.396    c-7.347,26.109-17.646,50.487-30.906,73.134c-13.26,22.644-29.172,43.248-47.736,61.812    c-18.562,18.564-39.168,34.479-61.812,47.736c-22.646,13.26-47.022,23.562-73.136,30.906C361.284,608.328,334.152,612,306,612z     M493.884,219.708l-48.96-49.572c-1.632-1.632-3.876-2.448-6.729-2.448c-2.856,0-5.103,0.816-6.732,2.448l-192.17,192.168    L180.54,302.94c-4.488-3.672-8.976-3.672-13.464,0l-48.96,49.572c-1.632,1.633-2.448,3.876-2.448,6.732    c0,2.448,0.816,4.488,2.448,6.12L232.56,479.808c2.04,2.04,4.284,3.063,6.732,3.063h0.612c2.856,0,4.896-1.021,6.12-3.063    l247.86-247.248c2.04-2.04,3.063-4.284,3.063-6.732C496.944,223.38,495.924,221.34,493.884,219.708z" fill="#5dd062"/></g></g></svg>'
	},
	playersTurn: false,
	round: 0,
	colors: ["green", "red", "blue", "yellow"],
	sequence: [],
	playback: [],
	green: {
		targetElement: document.getElementById("green"),
		activeClass: "green-active",
		sound: document.getElementById("green-sound")
	},
	red: {
		targetElement: document.getElementById("red"),
		activeClass: "red-active",
		sound: document.getElementById("red-sound")
	},
	yellow: {
		targetElement: document.getElementById("yellow"),
		activeClass: "yellow-active",
		sound: document.getElementById("yellow-sound")
	},
	blue: {
		targetElement: document.getElementById("blue"),
		activeClass: "blue-active",
		sound: document.getElementById("blue-sound")
	}
};	

// playPad method
Simon.playPad = function(color) {
	Simon[color].sound.play();
	Simon[color].targetElement.classList.add(this[color].activeClass);
	setTimeout( function() {
		Simon[color].targetElement.classList.remove(Simon[color].activeClass);
	}, 250);
};

// Create click & arrow key functions for each color pad
for(var i=0; i<Simon.colors.length; i++){
	let color = Simon.colors[i];
		Simon[color].targetElement.onmousedown = function(){
			if(Simon.playersTurn) {
				Simon.playPad(color);
				Simon.playback.push(color);
				Simon.evaluateMove();
			};
		};
	// Add arrow key functionality
	document.onkeydown = function(e) {
		e.preventDefault();
		if(Simon.playersTurn) {
			switch(e.keyCode) {
				case 37:
					Simon.playPad("green");
					Simon.playback.push("green");
					Simon.evaluateMove();
					break;
				case 38:
					Simon.playPad("red");
					Simon.playback.push("red");
					Simon.evaluateMove();
					break;
				case 39:
					Simon.playPad("blue");
					Simon.playback.push("blue");
					Simon.evaluateMove();
					break;
				case 40:
					Simon.playPad("yellow");
					Simon.playback.push("yellow");
					Simon.evaluateMove();
					break;
			}
		}
	};
};

// Play sequence method with timing delay
Simon.playSequence = function(){
	for(var i=0; i<Simon.sequence.length; i++) {
		setTimeout( function(j) {
			return function() {
				Simon.playPad(Simon.sequence[j]);
			};
		}(i), 900 * i);
	};
	setTimeout(function() {Simon.playersTurn = true;}, Simon.sequence.length * 900);
};

// Function to get a new random element from an array
Array.prototype.randomDiffElement = function(last) {
	if(this.length == 0) {
		return;
	} else if (this.length == 1) {
			return this[0];
	} else {
			var num = 0;
			do {
				num = Math.floor(Math.random() * this.length);      
			} while (this[num] == last);
		return this[num];
	}
};

// Evaluate user playback against proper sequence
Simon.evaluateMove = function() {
	for(var i=0; i<Simon.playback.length; i++) {
		var sequenceValue = Simon.sequence[i];
		var playbackValue = Simon.playback[i];
		var won = false;
		if(sequenceValue != playbackValue){
			Simon.menu.innerHTML = Simon.icons.gameover;
			Simon.reset();
		} else if(Simon.playback.length === Simon.sequence.length) {
			won = true;
		} 
	}
	if(won){
		Simon.playback.length = 0;
		Simon.playersTurn = false;
		setTimeout(function() {
			Simon.menu.innerHTML = Simon.icons.gamewon;
		}, 100);
		if(Simon.round < 20) {
			setTimeout(function() {Simon.playRound();}, 1500);
		} else if (Simon.round === 20) {
			Simon.reset();
			Simon.startGame();
		}
	}
};

// playRound method
Simon.playRound = function() {
	Simon.sequence.push(Simon.colors.randomDiffElement());
	Simon.round = Simon.sequence.length;
	Simon.menu.innerHTML = Simon.round;
	Simon.playSequence();
};

// reset method
Simon.reset = function() {
	setTimeout(function() {Simon.menu.innerHTML = Simon.icons.power;}, 2000);
	Simon.sequence.length = 0;
	Simon.playback.length = 0;
	Simon.round = 0;
	Simon.playersTurn = false;
	Simon.startGame();
};

// startGame method with click or spacebar
Simon.startGame = function(){
	if(Simon.round === 0) {
		Simon.menu.onclick = function() {
			Simon.playRound();
			this.onclick = null;
		}
	}
	document.addEventListener('keydown', function(e) {
		if(e.keyCode == 32 && Simon.round === 0){
			Simon.playRound();
		}
	});
};

// initialize game
Simon.startGame();