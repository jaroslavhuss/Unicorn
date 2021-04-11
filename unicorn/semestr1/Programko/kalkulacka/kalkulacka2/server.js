window.addEventListener("load", () => {
  main();
});

function main() {
  /**
   * Deklarace proměnných z kalkulačky
   */
  //Vstupní pole první a druhé číslo
  const prvniCislo = document.getElementById("prvniCislo");
  const druheCislo = document.getElementById("druheCislo");
  //Tlačítka
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const nasobeni = document.getElementById("nasobeni");
  const deleni = document.getElementById("deleni");
  //reset
  const reset = document.getElementById("resetBtn");
  const formular = document.getElementById("formular");
  //Výsledek - výstupní element
  const vysledek = document.getElementById("vysledky");

  /*
Zakaž formuláři submitování
*/
  formular.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  /**
   * Resetování formuláře
   */
  reset.addEventListener("click", () => {
    formular.reset();
  });

  /**
   * Navázaní klikacích eventů na tlačítka
   */

  minus.addEventListener("click", (e) => {
    spocitejVsechno("minus");
  });
  plus.addEventListener("click", (e) => {
    spocitejVsechno("plus");
  });
  nasobeni.addEventListener("click", (e) => {
    spocitejVsechno("nasobeni");
  });
  deleni.addEventListener("click", (e) => {
    spocitejVsechno("deleni");
  });

  function spocitejVsechno(operace) {
    const a = parseInt(prvniCislo.value);
    const b = parseInt(druheCislo.value);
    switch (operace) {
      case "minus":
        vysledek.innerHTML = a - b;
        break;
      case "plus":
        vysledek.innerHTML = a + b;
        break;
      case "nasobeni":
        vysledek.innerHTML = a * b;
        break;
      case "deleni":
        vysledek.innerHTML = a / b;
        break;

      default:
        vysledek.innerHTML = 0;
        break;
    }
  }
}
