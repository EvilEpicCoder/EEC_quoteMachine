//I see you finaly made it! You are very close now!
var qArray1=[];
var qArray2=[];
var qArray3=[];
var qArray4=[];	
var qAuthor=[];
var qm_text=0;
var qm_author=0;
var qm_picture=0;
var prev=0;
var tweet=0;
var next=0;
var magik=0;
var myVal=0;

window.onload=function(){

addEventListener("click",checkButtons,false);
qArray1=["Reality ","The Evil ","The madness ","Humanity ","The truth ","The Bad Heroes ", "Girls ", "Boys "];
qArray2=["must ","will ","love to ",];
qArray3=["kill ","broke ","fight ","eat ","curse "];
qArray4=["the angels.","the people.","the authors.","the boys.","the girls.","the evil."];	
qAuthor=[" Evil "," Lord "," Epic "," Coder "," Azazel "," Gabriel "," Uther ", " Boy "];
qm_text=document.getElementById("qmtext");
qm_author=document.getElementById("qmauthor");
qm_picture=document.getElementById("one");
prev=document.getElementsByClassName("prev");
tweet=document.getElementsByClassName("social");
next=document.getElementById("next");

randomWorld();
	
}
function randomWorld(){
magik=Math.floor(Math.random() * (11 - 0)) + 0;
qm_picture.style.backgroundImage = "url('pictures_qm/"+magik+".jpg')";
qm_text.textContent=qArray1[Math.floor(Math.random() * (8 - 0)) + 0]+qArray2[Math.floor(Math.random() * (3 - 0)) + 0]+qArray3[Math.floor(Math.random() * (5 - 0)) + 0]+qArray4[Math.floor(Math.random() * (6 - 0)) + 0];	
qm_author.textContent=qAuthor[Math.floor(Math.random() * (8 - 0)) + 0]+qAuthor[Math.floor(Math.random() * (8 - 0)) + 0];	
}
function checkButtons(evt){
	var x=evt.target.innerText;
	console.log(myVal);
	if(x=='Get random!'){
	clearInterval(myVal);
	randomWorld();
	}else if(x=="Tweet quote"){
	clearInterval(myVal);
	//location.href = "https://twitter.com/intent/tweet?text=HelloWorld";
	//location.href = "https://twitter.com/intent/tweet?text="+"Check out my quote mashine!\n"+qm_text.textContent+"\n https://codepen.io/EvilEpicCoder/pen/dRZYBP \n";
	window.open("https://twitter.com/intent/tweet?text="+"Check out my quote mashine! \n "+qm_text.textContent+" \n https://codepen.io/EvilEpicCoder/pen/dRZYBP \n ",'_blank');
	}else if(x=="Auto slide 5sec"){
		if(myVal==0){
		myVal=setInterval(function(){ randomWorld(); }, 5000);
		}else{
		clearInterval(myVal);
		myVal=0;
		}	
	}
}

