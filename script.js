let titulo = prompt("digite o texto do titulo da tela");
document.getElementById("title").innerText = titulo;
document.getElementById("title").style.width = document.getElementById("title").style.width+titulo.length*30;
let texto = prompt("digite o texto da mensagem de erro que vai ficar de baixo do titulo");
document.getElementById("message").innerText = texto;
let red = confirm("o fundo vai ser vermelho?");
let textos = ["a", "b", "c", "d", "enter", "t", "o"];
let indice = 0;
let ptOuen = ""
if(red==true){
	document.getElementById("message").style.backgroundColor = "red";
	document.getElementById("title").style.color = "red";
	document.querySelector("*").style.backgroundColor = "red";
}
else{
	let blue = confirm("o fundo vai ser azul?");
	if(blue==true){
	    document.getElementById("message").style.backgroundColor = "blue";
	    document.getElementById("title").style.color = "blue";
	    document.querySelector("*").style.backgroundColor = "blue";
	}
	else{
		let green = confirm("vai ser verde?");
		if(green==true){
	        document.getElementById("message").style.backgroundColor = "green";
	        document.getElementById("title").style.color = "green";
	        document.querySelector("*").style.backgroundColor = "green";
	    }
	}
}
let ingles = confirm("a tela vai ser em ingles?");
if(ingles==true){
	ptOuen = "en";
	document.getElementById("press").innerText = "press enter to continue";
}
else{
	let portugues = confirm("a tela vai ser em portugues?");
	if(portugues==true){
		ptOuen = "pt";
		document.getElementById("press").innerText = "pressione enter para continuar";
	}
}
alert("tenha um bom troll :)");
function loop(){
	setTimeout(function(){
		document.getElementById("press").innerText = document.getElementById("press").innerText+"_";
	}, 500);
	setTimeout(function(){
		document.getElementById("press").innerText = document.getElementById("press").innerText.replace("_", "");
		loop();
	}, 1500);
}
loop();
document.onkeydown = function(){
	const texto1 = document.getElementById("press").innerText;
	indice = Math.floor(Math.random() * 6) + 0;
	const resultado = textos[indice]
	document.getElementById("press").innerText = texto1.replace("_", "");
	if(ptOuen=="pt"){
		document.getElementById("press").innerText = "pressione "+resultado+" para continuar";
	}
	else{
		document.getElementById("press").innerText = "press "+resultado+" to continue";
	}
}
