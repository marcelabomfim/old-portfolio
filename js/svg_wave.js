(function(){

	var unit = 100;
	var canvas, context, canvas2, context2,height, width, xAxis, yAxis, draw;

	function init() {
		canvas = document.getElementById("sineCanvas");
		canvas.width = document.documentElement.clientWidth; //Fit the width of the Canvas to the width of the window
		canvas.height = 300;
		context = canvas.getContext("2d");
		height = canvas.height;
		width = canvas.width;
		xAxis = Math.floor(height/2);
		yAxis = 0;

		draw();
	}
	function draw(){
		context.clearRect(0, 0, width, height);// Clear

		drawWave('#0097A7', 1, 3, 0);//Draw a wave（fillcolor, alpha, zoom, delay）

		// Update the time and draw again
		draw.seconds = draw.seconds + .009;
		draw.t = draw.seconds*Math.PI;
		setTimeout(draw, 35);
	};
	draw.seconds = 0;
	draw.t = 0;

	function drawWave(fillcolor, alpha, zoom, delay) {
		context.fillStyle = fillcolor;
		context.globalAlpha = alpha;

		context.beginPath(); //Start pass
		drawSine(draw.t / 0.5, zoom, delay);
		context.lineTo(width + 10, height); //Path to the bottom right of Canvas
		context.lineTo(0, height); //Path to the bottom left of Canvas
		context.closePath() //Close path
		context.fill(); //Fill
	}

	function drawSine(t, zoom, delay) {
		var x = t; //Let's set the time as the horizontal position
		var y = Math.sin(x)/zoom;
		context.moveTo(yAxis, unit*y+xAxis); //Put the path at the start position

		// Loop to draw segments (Draw waves by the width)
		for (i = yAxis; i <= width + 10; i += 10) {
			x = t+(-yAxis+i)/unit/zoom;
			y = Math.sin(x - delay)/3;
			context.lineTo(i, unit*y+xAxis);
		}
	}

	init();

})();
