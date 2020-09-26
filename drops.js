class drops(){
	constructor(x, y, radius){
		options={
			setStatic:true,
			restition:0.3,
			friction:0.1,
			density:1.2
		}
	}

	this.x = x;
	this.y = y;
	this.r = radius;
	this.body = Matter.Bodies.Circle(this.x, this.y, this.r. options);
	World.add(world, this.body);

	display(){
		push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0, 0, this.r, this.r);
        pop();
	}

	update(){
		if(this.body.position.y > height){
			Matter.body.setPosition(this.rain, {x:random(0, 400)}, {y:random(0, 400)});
		}
	}
}