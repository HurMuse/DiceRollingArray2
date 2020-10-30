let rollButton = document.querySelector("#roll-button");
let quantity = document.querySelector("#quantity");
let diceResults = document.querySelector("#dice-results");

let showAllDiceRollsButton = document.querySelector("#showAllDiceRolls-button");
let showAll = document.querySelector("#show-all");
let listAll = document.querySelector("#list-all");

const resetAllButton = document.querySelector("#reset-button");

let count = 1;
let newTotal = 0;

const newValue = [];
let sum = (accumulator, currentValue) => accumulator + currentValue;

rollButton.addEventListener("click", function () {
  while (count <= quantity.value) {
    random1 = Math.floor(Math.random() * 10 + 1);

    let arrayValue = newValue.push(random1);

    count++;

    //console.log(arrayValue);
    //console.log(random1);
    //console.log(count);
    console.log(newValue);
    //console.log(total);
  }

  total = newValue.reduce(sum);

  diceResults.innerText = "Total: " + total;
});

showAllDiceRollsButton.addEventListener("click", function () {
  for (i = 0; i < newValue.length; i++) {
    listAll.innerHTML = "<li>" + newValue.join("<li>") + "</li>";
  }
  console.log(listAll.innerHTML);
});

resetAllButton.addEventListener("click", function () {
  window.location.reload();
  //let clearInputs = document.querySelectorAll("#quantity");
  //clearInputs.forEach((quantity) => (quantity.value = ""));
  //let clearDiceTotal = document.querySelectorAll("#dice-results");
  //clearDiceTotal.forEach((diceResults) => (diceResults.innerText = ""));
  //let clearList = document.querySelectorAll("#list-all");
  //clearList.forEach((listAll) => (listAll.innerHTML = ""));
  //for (i = 0; (i = newValue.length); i++) {
  //newValue.pop();
  //console.log(newValue);
  //}
});
