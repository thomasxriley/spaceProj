var ship;
var planet;
var deltaSpeed = 0;
var pixelScale = 3474;
var img;

//1 pixel = 3474 km - this make the pixel the size of the moon

function preload() {
  img = loadImage('rocket.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
	planet = new Planet();
}

function draw() {
	background(0);

	//Rotation of the rocket ship image in each direction
	if(ship.dir >= 0){
		push();
			translate(800, 200);
		
			rotate(radians(90));
			scale(0.5);
			image(img, height/2, 100);
		pop();
	}
	if(ship.dir < 0){
		push();
			translate(600, 750);
		
			rotate(radians(270));
			scale(0.5);
			image(img, height/2, 100);
		pop();
	}

	translate(-ship.x,0); // keeps the rocket the centre of attention

	//Intro screen
	if(ship.loop == 0){
		fill(255);
		textSize(20);
		text("Welcome to the solar system, every pixel represents 3474Km (the size of Earth's moon!).", 500, windowHeight/2+50);
		text("Press and hold the arrow keys to speed up, don't worry you will slow down once you get near a planet.", 500, windowHeight/2 +80);
		deltaSpeed = 5;
		fill(253, 184, 19);
		ellipse(250,windowHeight/2,(695508*2)/pixelScale,(695508*2)/pixelScale);
	}
	if(ship.loop == 1){
		textSize(20);
		text("This might take awhile...", windowWidth-100,windowHeight/2+50);
		deltaSpeed = 5;
	}
	
	//Create and place the planets based on your screen 
	planet.showPlanet(16666,Math.floor(16666/windowWidth),2439*2,windowHeight/2,255,0,0,"Mercury");
	planet.showPlanet(31148,Math.floor(31148/windowWidth),6051*2,windowHeight/2,255,165,0,"Venus");
	planet.showPlanet(43062,Math.floor(43062/windowWidth),6371*2,windowHeight/2,0,191,255,"Earth");
	planet.showPlanet(65614,Math.floor(65614/windowWidth),3389*2,windowHeight/2,255,69,0,"Mars");
	planet.showPlanet(224047,Math.floor(224047/windowWidth),69911*2,windowHeight/2,255,160,122,"Jupiter");
	planet.showPlanet(410669,Math.floor(410669/windowWidth),58232*2,windowHeight/2,234,214,184,"Saturn");
	planet.showPlanet(826326,Math.floor(826326/windowWidth),25362*2,windowHeight/2,240,248,255,"Uranus");
	planet.showPlanet(1286239,Math.floor(1286239/windowWidth),24622*2,windowHeight/2,30,144,255,"Neptune");
	planet.showPlanet(2123180,Math.floor(2123180/windowWidth),1188*2, windowHeight/2,246,221,189,"Pluto");
	
	//The "game" loop 
	ship.updateShip();
	ship.showDist();
	ship.loopShip();

	text(ship.loop,ship.x, 400);

	//Draws a scale to see where you are 
	drawScale();
	//Checks for input 
	checkKeyDown();
}

//checks for user input 
function checkKeyDown() {
	
	if (keyIsDown(RIGHT_ARROW)) {
		ship.dir = 1;
		if(deltaSpeed < 100)
			deltaSpeed = deltaSpeed +1 ;
		ship.xspeed = 1;
	} 

	if (keyIsDown(LEFT_ARROW)) {
		ship.dir = -1;
		if(deltaSpeed <100)
			deltaSpeed = deltaSpeed +1 ;
		ship.xspeed = -1;
	} 
}

//draws a scale on the bottom
function drawScale(){
	
	var x = windowWidth/40;

	if(ship.loop == 0){
		textSize(20);
		text("The distance between each line represents "+ x*3474 + "Km", 500,windowHeight/2+110);
	}
	
	for (let i = 0; i < 100; i++){
		fill(255);
		noStroke();
		rect(x*i,height-50,1,50);
		}
}

