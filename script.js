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
    pogingen +
    "proberen"
);

function hoeDan() {
  raadNummer = parseInt(raadNummer);

  if (pogingen == 0) {
    alert("Helaas, probeer het opnieuw");

    return;
  }

  if (raadNummer == hetTeRadenNummer) {
    alert("Gefeliciteerd je hebt gewonnen");

    return;
  }

  pogingen = pogingen - 1;

  alert("Helaas, probeer het opnieuw");

  //nieuwekans

  raadNummer = prompt(
    "Hey " +
      halloNaam +
      "! Kies een getal van 0 tot 25! je mag het" +
      pogingen +
      "proberen"
  );

  hoeDan();
}
hoeDan();
