function Ship(){
	this.x = 0;
	this.xspeed = 0;
	this.dist = 0;
	this.dir = 0;
	this.loop = 0;

	this.returnSX = function(){
		return this.x;
	}

	this.updateShip = function(){	
		this.x = this.x + this.xspeed*deltaSpeed;
		this.dist = this.dist + this.xspeed*deltaSpeed;
		
		this.x = constrain(this.x, -0,100000000);
		this.dist = constrain(this.dist, 0, 10000000);
	}

	//shows distance on screen
	this.showDist = function(){
		fill(255);
		textSize(12);
		text("You are going "+this.xspeed*deltaSpeed*pixelScale*60+"Km/S",this.x+(windowWidth/2-140)-this.xspeed*deltaSpeed,windowHeight-120);
		text(this.dist*3474 + " KM", this.x+(windowWidth/2-100)-this.xspeed*deltaSpeed,windowHeight-100);
		}

	//loops the ship to keep everything efficient
	this.loopShip = function(){
		if(this.dir > 0){
			if (this.x  >= windowWidth) {
				ship.loop++;
				this.x = 0;
			}
		}

		if(this.dir < 0 ){
			if(this.x <=0){
				ship.loop--;
				this.x = windowWidth;
			}
			if(this.dist == 0){
				ship.loop = 0;
				this.x = 0;	
			}	
		}
	}
}
