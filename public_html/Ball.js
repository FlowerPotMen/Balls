function Ball(canv,x,y,dx,dy,radius,name){
    
    var context = canv.getContext('2d');;
    this.dx = dx;
    this.dy=dy;
    this.y=y;
    this.x=x;
    this.maxx=window.innerWidth;
    this.maxy=window.innerHeight;
    this.radius=radius;
    this.color = "#0000ff";
    this.name = name;
    this.collision=[];
    this.collCount =0;
    this.init = function(){
        
        
	//context.clearRect(0,0,this.maxx,this.maxy);
	context.beginPath();
	context.fillStyle=this.color;
	context.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
	context.closePath();
	context.fill();
        


    }
    
    this.clearLast = function(){
        context.beginPath();
	context.fillStyle="#ffffff";
	context.arc(this.x,this.y,this.radius+1,0,Math.PI*2,true);
	context.closePath();
	context.fill();
        
    }
    
    this.move = function(){
      
        
        this.clearLast();
        
      	if( this.x<0 || this.x>this.maxx){
        	this.dx=-this.dx;
        }
	if( this.y<0 || this.y>this.maxy){
		this.dy=-this.dy;
        }
        this.x+=this.dx;
	this.y+=this.dy;
        
        this.init();
        
    }
}

