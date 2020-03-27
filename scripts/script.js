// L’importante è usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input, e mi draà l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto) e campi puliti (non vale fare refresh del browser :male-farmer:);


var buttGenera = document.getElementById("genera");
var buttAnnulla = document.getElementById("annulla")

buttGenera.addEventListener("click",
function () {

  var contBiglietto = document.getElementById("biglietto");

  contBiglietto.style.opacity = 1;

  var nomeCognome = document.getElementById("nomeCognome");
  var kmDaFare = document.getElementById("kmDaFare");
  var etaPass = document.getElementById("etaPass");

  var valNome = nomeCognome.value;
  var valKm = kmDaFare.value;
  var valEta = etaPass.value;

  console.log("nome passseggero "+ valNome + " eta passeggero " + valEta + " km da perco " + valKm)

  // output nome
  document.getElementById('nome-passeggero').innerHTML = valNome;

  // variabili prezzo
  var costo = 0.20;
  var prezzoBiglietto = costo * valKm;
  var outPrezzo = document.getElementById("prezzo");

  // output offerta e prezzo
  var outOfferta = document.getElementById("offerta");

  if (valEta == 18){
    outOfferta.innerHTML = "BIMBO SPECIALE";
    prezzoBiglietto = prezzoBiglietto * 0.80;
    outPrezzo.innerHTML = prezzoBiglietto.toFixed(2) + " Euro";

  } else if (valEta == 65) {
    outOfferta.innerHTML = "PIEDE NELLA FOSSA";
    prezzoBiglietto = prezzoBiglietto * 0.60;
    outPrezzo.innerHTML = prezzoBiglietto.toFixed(2) + " Euro";

  } else if (valEta == 50) {
    outOfferta.innerHTML = "BIGLIETTO INTERO";
    outPrezzo.innerHTML = prezzoBiglietto.toFixed(2) + " Euro";
  }

  // output cabina e codice CP

  var numberRandom;
  numberRandom = Math.random();

  console.log("numero random " + numberRandom);

  var nrCabina = numberRandom * 35;

  do {
    var randomCodice = Math.random()
    var nrCodice = randomCodice * 10000;
  } while (nrCodice < 4000);

  console.log(nrCabina);

  document.getElementById("carrozza").innerHTML = nrCabina.toFixed(0);
  document.getElementById("codiceCp").innerHTML = nrCodice.toFixed(0);




})

buttAnnulla.addEventListener("click",
function(){
  var contBiglietto = document.getElementById("biglietto");
  contBiglietto.style.opacity = 0;


  var nomeCognome = document.getElementById("nomeCognome");
  var kmDaFare = document.getElementById("kmDaFare");

  nomeCognome.value = "";
  kmDaFare.value = "";



})






// console.log(etaPass.value);
