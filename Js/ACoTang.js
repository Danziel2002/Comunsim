var Angle;
var Click = 0;


function setup() {
	var cnv = createCanvas(600, 500);
	cnv.parent('CercCos');
	Angle = createSlider(-700, 700, -700, 0.01);
	Angle.parent('CercCos');
	Angle.class('Bar');
	background(51);


}

var BigGraph = function(){ //BigGraph is the function that draws the big version of the ArcTan graph
	strokeWeight(1);
	translate(300, 250);
	background(51);
	stroke(255);
	text(0,1,0);
	line(0,0,0,300);
	line(0,0,0,-300);
	line(0,0,300,0);
	line(0,0,-300,0);
	noFill();
	var Alfa = radians(Angle.value());
	//Inbetween space is 50 px;
	for(var x = -560; x < Alfa; x = x + 0.01){
		strokeWeight(1);
		strokeWeight(2);
		y = atan(x);
		// strokeWeight(2);
		// y = atan(x) * 10;
		// point(x * 120, -y*10);
		point(x * 25, -y*35 - 50);
		// point(0  +(x * x *x) , 50);
		// point(0  +(x * x *x) , -50);
		}}

var Paral = 0;
var Para = function(){
	if(Paral == 1){
		Paral = 0
	}
	else{
		Paral = 1
	}
}
function draw(){

		BigGraph();
		if(Paral == 1){
			line(-300, 35, 300, 35);
			line(-300, -35, 300, -35);
		}
	}