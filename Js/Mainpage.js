let meniuStangaActiv = false;
let meniuDreaptaActiv = false;
var EClicks = 0;
var FClicks = 0;

let HideTheOther = function(Hides){
	Hides.style.opacity = 0;
}


let FText = function(){
	let contextF = document.querySelector(".textFunctii");
	let Functii = document.querySelector(".Functii");

	if(FClicks === 0){
		contextF.style.opacity = 1;
		FClicks = 1;
		contextF.style.display = "grid";
		contextF.style.boxShadow = "2px 2px 3px grey"; 
	}
	else{
		contextF.style.display = "none";
		contextF.style.opacity = 0;
		FClicks = 0;
		contextF.style.boxShadow = 0; 

	}


}

let EText = function(){

	let contextE = document.querySelector(".textEcuatii");
	let Ecuatii = document.querySelector(".Ecuatii");

	if(EClicks === 0){
		contextE.style.display = "grid";
		contextE.style.opacity = 1;
		EClicks = 1;
		contextE.style.boxShadow = "2px 2px 3px grey"; 
	}
	else{
		contextE.style.display = "none";
		contextE.style.opacity = 0;
		EClicks = 0;
		contextE.style.boxShadow = 0; 

	}


}


let ShowTheOther = function(Show){
	Show.style.opacity = 1;
	if(FClicks == 1){
	FText();}
	if(EClicks == 1){
	EText();
}}
