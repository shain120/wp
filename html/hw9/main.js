var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "#6E1318";  //dark red
ctx.fillRect(450, 0, 150, 50);
ctx.fillRect(400, 50, 150, 50);
ctx.fillRect(350, 100, 100, 50);
ctx.fillRect(350, 150, 50, 50);

ctx.fillStyle = "#811920";  //red
ctx.fillRect(600, 0, 100, 50);
ctx.fillRect(550, 50, 200, 50);
ctx.fillRect(450, 100, 350, 50);
ctx.fillRect(400, 150, 100, 50);

ctx.fillStyle = "#DAECE0";  
ctx.fillRect(500, 150, 400, 50);

ctx.fillStyle = "#232845";  //dark blue
ctx.fillRect(300, 200, 150, 50);
ctx.fillRect(500, 200, 50, 50);
ctx.fillRect(600, 200, 50, 50);
ctx.fillRect(700, 200, 100, 50);
ctx.fillRect(750, 250, 50, 50);

ctx.fillRect(350, 250, 100, 50);
ctx.fillRect(300, 300, 100, 50);
ctx.fillRect(350, 350, 50, 50);



ctx.fillStyle = "#F3C798";  //dark skin color
ctx.fillRect(450,200,50,50);
ctx.fillRect(550,200,50,50);
ctx.fillRect(650,200,50,50);
ctx.fillRect(500,250,50,50);
ctx.fillRect(400,300,50,100);
ctx.fillRect(350,400,50,100);
ctx.fillRect(400,450,50,50);

ctx.fillStyle = "#3158A3";  //blue
ctx.fillRect(300,500,500,200);
ctx.fillRect(250,550,50,150);

ctx.fillStyle = "#F9E1C9";  //skin color
ctx.fillRect(450,250,300,250);
ctx.fillRect(400,400,50,50);
ctx.fillRect(750,700,50,50);
ctx.fillRect(250,700,50,50);

ctx.fillStyle = "#659F4B";  //green
ctx.fillRect(300,450,50,50);
ctx.fillRect(350,500,50,50);
ctx.fillRect(400,550,50,100);
ctx.fillRect(350,650,50,50);
ctx.fillRect(300,600,50,150);
ctx.fillRect(750,500,50,100);

ctx.fillStyle = "#0D0A13";  //black
ctx.fillRect(550,300,50,100);
ctx.fillRect(700,300,50,100);
ctx.fillRect(550,500,150,200);
ctx.fillRect(350,750,400,150);

ctx.fillStyle = "#36373C";  //gray
ctx.fillRect(350,700,400,50);

var c1 = document.getElementById("myCanvas2");
var ctx1 = c1.getContext("2d");
const grad=ctx1.createLinearGradient(0,0,280,0);
 
grad.addColorStop(0, "#8A2BE2"); 
grad.addColorStop(0.5, "#D94DFF"); 
grad.addColorStop(1, "	#7C266D"); 


// Fill rectangle with gradient
ctx1.fillStyle = grad;
ctx1.fillRect(10,10,280,130);