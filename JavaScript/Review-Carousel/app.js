var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");


btn[0].onclick = function(){
	slide.style.transform = "translateX(0px)";
	for(i=0;i<3;i++){
		btn[i].classList.remove("main");
	}
	this.classList.add("main");
}

btn[1].onclick = function(){
	slide.style.transform = "translateX(-800px)";
	for(i=0;i<3;i++){
		btn[i].classList.remove("main");
	}
	this.classList.add("main");
}

btn[2].onclick = function(){
	slide.style.transform = "translateX(-1600px)";
	for(i=0;i<3;i++){
		btn[i].classList.remove("main");
	}
	this.classList.add("main");
}