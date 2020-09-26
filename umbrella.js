class umbrella(){
	constructor(x, y){
		options={
			setStatic:false,
			restition:0.3,
			friction:0.1,
			density:1.2
		}
	}

	this.x = x;
	this.y = y;
	this.r = radius;
	this.image = loadImage("batman.png");
	this.body = Matter.Bodies.Circle(this.x, this.y, this.r. options);
	World.add(world, this.body);

	display(){
		imageMode(CENTER);
		image(this.image, 720, 220, 70, 70);
		push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0, 0, this.r, this.r);
        pop();
	}
}
