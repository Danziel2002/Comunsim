var Exerciti = 0;

const Extend = (Data) =>{
	if(Exerciti == 1){
		Data.style.display = "none";
		Exerciti = 0;
	}
	else{
		Data.style.display = "inline";
		Exerciti = 1;
	}
}