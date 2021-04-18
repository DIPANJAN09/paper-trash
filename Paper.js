class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0.5,
			density:1.2		
			}
        this.body=Bodies.rectangle(x, y,70,70, options);
        this.x=x;
		this.y=y;
		this.w=w
		this.y=y;
		
 		World.add(world, this.body);
         this.image=loadImage("paper.png");

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(0)
			image(this.image,0,0,70,70);
			pop()
			
	}

}