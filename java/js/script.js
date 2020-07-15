function ahoj(parametr) {
    
    alert('Programování ahoj' + parametr);

}

function ukazCas( ) { 

let aktualniCas = new Date();

let hodin = 'Hodin:' + aktualniCas.getHours();
let minut = 'Minut:' + aktualniCas.getMinutes();
let vterin = 'Vteřin:' + aktualniCas.getSeconds();

let spojenyCas = hodin + '<br />' + minut + '<br />' + vterin;

document.getElementById('hodiny').innerHTML = spojenyCas;

document.getElementById('hodiny').classList.toggle('barevne');



}