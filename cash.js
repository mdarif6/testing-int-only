let billInput = document.querySelector(".billinput");
let paidInput = document.querySelector(".paidinput");
let btn = document.querySelector(".button");
let output = document.querySelector(".output");
let heading = document.querySelector(".tableheading");
let tableShow = document.querySelector(".tbody");

function cashRegister(billInput, paidInput) {
  const currency = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  let currencyObject = {};
  let backAmount = paidInput - billInput;

  for (let i = 0; i < currency.length; i++) {
    if (backAmount < currency[i]) {
      currencyObject[currency[i]] = 0;
    } else {
      let remainder = backAmount % currency[i];
      let quotient = (backAmount - remainder) / currency[i];
      currencyObject[currency[i]] = quotient;
      backAmount = remainder;
    }
  }
  console.log(currencyObject);
  return currencyObject;
}

btn.addEventListener("click", () => {
  console.log("clicked");

  let billAmount = billInput.value;
  let paidAmount = paidInput.value;

  if (paidAmount < billAmount) {
    output.textContent = "wrong iformation";
  } else {
    let returnedAmount = cashRegister(billAmount, paidAmount);
    console.log(returnedAmount);
    let currencyObjectKeys = Object.keys(returnedAmount);
    console.log(currencyObjectKeys);

    for (let i = 0; i < currencyObjectKeys.length; i++) {
      let row = document.createElement("tr");
      let firsttd = document.createElement("td");
      let secondtd = document.createElement("td");

      firsttd.textContent = currencyObjectKeys[i];
      secondtd.textContent = returnedAmount[currencyObjectKeys[i]];

      row.appendChild(firsttd);
      row.appendChild(secondtd);
      tableShow.appendChild(row);
    }
  }
});
