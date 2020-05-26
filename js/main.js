
function load(){
    //console.log("pagina carregada")
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar</i>";

    //alert("Obrigado por clicar");
}

function redir(){
    //window.open("http://www.google.com");
    window.location.href = "http://www.google.com";
}

function mousein(elemento){
    //document.getElementById("mouse").innerHTML = "Obrigado";
    elemento.innerHTML = "Obrigado";
}

function mouseout(elemento){
    //document.getElementById("mouse").innerHTML = "Obrigado";
    elemento.innerHTML = "PASSE O MOUSE AQUI";
}

function optmudar(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(5, 10));
*/


//var d = new Date();
//alert(d.getDate())

/*
var count;
for (count=0; count <= 5; count++){
    console.log(count);
}
*/
/*
var count = 0;
while (count < 5){
    console.log(count);
    count++;
};
*/
/*
var idade = prompt("Digite sua idade:");
if (idade < 18){
    console.log("menor de idade");
}else{
    console.log("maior de idade");
};
*/
//var fruta = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxo"}];
//console.log(fruta[1].nome);
//console.log(fruta[0].cor);
//var nome = "Eduardo Garcia";
//var idade = 31;
//var frase = "O Logus é o melhor carro do mundo";
//alert(frase.replace("Logus", "Etios"))
//var lista = ["maça", "banana", "caqui"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.join(" *_* "));