var Angle;
var Click = 0;


let ButtonP = function() {
	if (Click === 0){

		Click = 1
	} else {
		Click = 0;
	}

}


function setup() {
	var cnv = createCanvas(600, 500);
	cnv.parent('graph');
	if(Click == 0){
	Angle = createSlider(-52, 52, -52, 0.1);
			}else {
			Angle = createSlider(0, 360, 0);
		}
	Angle.parent('graph');
	Angle.class('Bar');
}
var Mare = function(){
	strokeWeight(1);
	translate(300, 250);
	background(51);
	stroke(255)
	text(0,1,0)
	line(0,0,0,200);
	line(0,0,0,-200);
	line(0,0,200,0);
	line(0,0,-200,0);
	noFill();
	var Angl = Angle.value();
	Angl1 = map(Angl, -52, 52, -20, 20);
	var Alfa = Angl1;
	//Inbetween space is 50 px;
	for(var x = -200; x < Alfa; x = x + 0.1){
		strokeWeight(1);
		strokeWeight(2);
		y = cos(x) * 49;
		point(x * 15, -y);
		point(0  +(x * x *x) , 50);
		point(0  +(x * x *x) , -50);
	}
}
var Circle = function(){

	//Face graficul pentru cerc
	strokeWeight(1);
	translate(300, 250);
	background(51);
	stroke(255)
	line(0,0,0,200);
	line(0,0,0,-200);
	line(0,0,200,0);
	line(0,0,-200,0);
	noFill();
	ellipse(0,0,400);
	
	var a = map(Angle.value(), 52, -52, 0, 360);
	var Alfa = radians(a); 
	var r = 200;
	//Deseneaza triunghiul
	var dx = r * cos(Alfa);
	var dy = r * sin(Alfa);
	var dd = dist(dx,dy,dy);
	strokeWeight(4);
	stroke(0,255,0);
	line(0,0,dx, dy);
	line(0,0,dx,0);
	stroke(255,0,0);
	line(dx,dy,dx, 0);
	
}
var Paral = 0;

function Para(){
	if(Paral == 0){
		Paral = 1;
	}
	else{
		Paral = 0;
	}
}

function draw(){
		Mare();
}
