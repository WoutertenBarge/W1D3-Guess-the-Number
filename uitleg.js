//Math.random is een getal tussen de 0 en de 1, door deze met 25 te vermenigvuldigen
//krijgt hetTeRadenNummer een waarde tussen 0 en 25
//Math.floor rond Math.random x 25 af naar beneden, zodat
//hetTeRadenNummer een heel getal is

let hetTeRadenNummer = Math.floor(Math.random() * 25);

//aantal pogingen zijn 5 dus hier een variabele voor
let pogingen = 5;

//in scherm hallo wat is je naam + invullen
const halloNaam = prompt("Welkom! Wat is je naam? , '  '  ");

//in scherm Hey + naam + invullen getal
let raadNummer = prompt(
  "Hey " +
    halloNaam +
    "! Kies een getal van 0 tot 25! je mag het" +
    " " +
    pogingen +
    " " +
    " keer proberen"
);

//de functie schrijven
//Wat is zeker
//  1   als de 5 pogingen op zijn, dan Game-Over, dit betekent dat de rest van de functie niet hoeft
//      te worden uitgevoerd, en weer naar het begin van de functie kan, dit gebeurd met
//      return    ... stop functie...tot hier en niet verder... terug naar begin functie

//  2   als het nummer geraden is, dan hoeft de functie ook niet verder uitgevoerd te worden, en
//      kan het spel opnieuw gespeeld worden, dus ook met
//      return    ... stop functie...tot hier en niet verder... terug naar begin functie

function hoeDan() {
  raadNummer = parseInt(raadNummer); //parseInt maakt van een getal een getal zonder decimalen

  if (pogingen == 0) {
    alert("Helaas, probeer het opnieuw");

    return;
  }

  if (raadNummer == hetTeRadenNummer) {
    alert("Gefeliciteerd je hebt gewonnen");

    return;
  }

  //wanneer je een poging gedaan hebt heb je dus -1 progingen over
  //denk eraan dat javascript hier van boven naar beneden de functie afloopt dus
  //5 pogingen -- poging 1 -- niet =0 -- dus verder
  //                       -- niet gewonnen -- dus verder
  //                       -- We zijn gestart met 5 pogingen, niet gewonnen dus nog 4
  //                          pogingen over dit is;
  //                       -- pogingen = pogingen -1

  pogingen = pogingen - 1;

  alert("Helaas, probeer het opnieuw"); //--Bericht--

  //nieuwekans

  //              poging 2 -- en functie weer opnieuw van boven naar onder

  // raadnummer staat in de functie en is nu overschreven

  raadNummer = prompt(
    "Hey " +
      halloNaam +
      "! Kies een getal van 0 tot 25! je mag het" +
      pogingen +
      "proberen"
  );

  hoeDan(); //door de functie hoeDan(); in dezelfde functie aan te roepen herhaal je de functie
}
hoeDan(); //door de functie hier aan te roepen start je de functie
