const result = document.getElementById("result");

document.querySelectorAll(".btns button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Please Enter valid Numbers";
      return;
    }

    const operator = btn.textContent;
    let res;

    if (operator === "+") {
      res = num1 + num2;
    } else if (operator === "-") {
      res = num1 - num2;
    } else if (operator === "×") {
      res = num1 * num2;
    } else if (operator === "÷") {
      if (num2 === 0) {
        res = "Cannot divide by zero";
      } else {
        res = num1 / num2;
      }
    }

    result.textContent = "Result => " + res;
  });
});
 