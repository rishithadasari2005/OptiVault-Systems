function calculateNotes() {
  let amount = parseInt(document.getElementById("amount").value);
  let denominations = [2000, 500, 200, 100, 50, 20, 10];
  let result = "";

  if (amount <= 0 || isNaN(amount)) {
    document.getElementById("result").innerText =
      "Please enter a valid amount.";
    return;
  }

  denominations.forEach((denom) => {
    let count = Math.floor(amount / denom);
    if (count > 0) {
      result += `${denom} x ${count}<br>`;
      amount %= denom;
    }
  });

  document.getElementById("result").innerHTML =
    result || "Cannot dispense amount with available denominations.";
}
