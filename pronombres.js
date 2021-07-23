let texto = prompt("Escribí el texto a analizar");
texto = texto.toLowerCase();

let yo = /\byo\b/gi;
let vos = /\bvos\b/gi;
let el = /\bel\b|\b[\u00C9l]\b/gi;
let ella = /\bella\b/gi;
let nosotros = /\bnosotros\b/gi;
let ustedes = /\bustedes\b/gi;
let ellos = /\bellos\b/gi;
let ellas = /\bellas\b/gi;


let checkyo =texto.match(yo);
let checkvos = texto.match(vos);
let checkel = texto.match(el);
let checkella = texto.match(ella);
let checknosotros = texto.match(nosotros);
let checkustedes = texto.match(ustedes);
let checkellos = texto.match(ellos);
let checkellas = texto.match(ellas);


if(checkyo==null || checkyo==undefined){
	checkyo=0;
}else{
	checkyo=checkyo.length;
}
if(checkvos==null || checkvos==undefined){
	checkvos=0;
}else{
	checkvos=checkvos.length;
}
if(checkel==null || checkel==undefined){
	checkel=0;
}else{
	checkel=checkel.length;
}
if(checkella==null || checkella==undefined){
	checkella=0;
}else{
	checkella=checkella.length;
}
if(checknosotros==null || checknosotros==undefined){
	checknosotros=0;
}else{
	checknosotros=checknosotros.length;
}
if(checkustedes==null || checkustedes==undefined){
	checkustedes=0;
}else{
	checkustedes=checkustedes.length;
}
if(checkellos==null || checkellos==undefined){
	checkellos=0;
}else{
	checkellos=checkellos.length;
}if(checkellas==null || checkellas==undefined){
	checkellas=0;
}else{
	checkellas=checkellas.length;
}



document.write(`Veces que se escribió "yo": `+ checkyo + "<br>");
document.write(`Veces que se escribió "vos": `+ checkvos + "<br>");
document.write(`Veces que se escribió "él": `+ checkel + "<br>");
document.write(`Veces que se escribió "ella": `+ checkella + "<br>");
document.write(`Veces que se escribió "nosotros": `+ checknosotros + "<br>");
document.write(`Veces que se escribió "ustedes": `+ checkustedes + "<br>");
document.write(`Veces que se escribió "ellos": `+ checkellos + "<br>");
document.write(`Veces que se escribió "ellas": `+ checkellas + "<br>");

