/**
 * 1.
 * Úvodní load - zakáže, aby se form při submitu reloadnul
 */
window.addEventListener("load", () => {
  const form = document.getElementById("calcForm"); //targetne form
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //Zakáže submitnutní formu (defaultní chování submit eventu)
  });
  const resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", () => {
    form.reset();
    vysledek.innerHTML = "";
  });
});
/**
 * 2.
 * Uděláme deklaraci proměnných, které pro program potřebujeme a
 * rovnou je napojíme na HTML
 */
const firstNumber = document.getElementById("firstNumber"); //první číslo
const secondNumber = document.getElementById("secondNumber"); //druhé číslo
const plusBtn = document.getElementById("plus"); //Tlačítko plus
const minusBtn = document.getElementById("minus"); // Tlačítko minus
const divideBtn = document.getElementById("divide"); // Tlačítko divide
const multipleBtn = document.getElementById("multiple"); //Tlačítko multiple
const vysledek = document.getElementById("vysledek");
/**
 * 3. Deklarace event listenerů, které budou obsluhovat výše uvedené proměnné
 */

//udělej něco, když se klikne na plusko
plusBtn.addEventListener("click", () => {
  spocitejVsechno("sčítám");
});
minusBtn.addEventListener("click", () => {
  spocitejVsechno("odečítám");
});
divideBtn.addEventListener("click", () => {
  spocitejVsechno("dělím");
});
multipleBtn.addEventListener("click", () => {
  spocitejVsechno("násobím");
});

/**
 * 4. Hlavní logická funkce, která to spočítá
 */
function spocitejVsechno(operace) {
  const a = parseInt(firstNumber.value); //načte hodnotu prvního čísla z formuláře
  const b = parseInt(secondNumber.value); //načte hodnotu druhého čísla z formuláře
  if (isNaN(a + b)) {
    //když nejsou čísla typu number - taková lehká kontrola
    vysledek.innerHTML = "Nelze spočítat!";
  } else {
    switch (operace) {
      case "sčítám":
        vysledek.innerHTML = a + b;
        break;
      case "odečítám":
        vysledek.innerHTML = a - b;
        break;
      case "dělím":
        if (a === 0 && b === 0) {
          vysledek.innerHTML = "Operace nepodporována";
        } else {
          vysledek.innerHTML = a / b;
        }

        break;
      case "násobím":
        vysledek.innerHTML = a * b;
        break;

      default:
        vysledek.innerHTML = 0;
        break;
    }
  }
}
