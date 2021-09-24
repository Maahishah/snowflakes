class Snowflakes{
constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
this.x=x;
this.y=y;
this.width=width;
this.height=height;

this.image=loadImage("snow5.webp");
 this.body = Bodies.rectangle(x, y, width, height, options);

 World.add(world,this.body);

}
display(){
var angle= this.body.angle;
push();
rotate(angle);
translate(this.body,posiition.x,this.body.posiition.y)
imageMode(CENTER);
image(this.image,this.body.posiition.x,this.body.posiition.y)

pop();
    
}


}