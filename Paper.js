class Paper{
	constructor(x,y){

      var options={
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2


      }

      this.body=Bodies.rectangle(x, y, options);
      World.add(world, this.body);


        this.image=loadImage("paper.png") ; 
    }
    display()
    {
        var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(445)
			rect(0,0,this.width, this.height);
			pop()
    }
    
}