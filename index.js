let equation = "";

const displayValue = document.getElementById("display-value");
const displayErrorMessage = document.getElementById("display-error-message");

const handleKeydown = (event) => {
  const tecla = event.key;
  const calculatorRegex = /[0-9+\-*/().]/;

  if (calculatorRegex.test(tecla)) {
    getValue(tecla);
  } else if (tecla === "Backspace") {
    handleDelete();
  } else if (tecla === "=") {
    getResult();
  }
};

const getValue = (value) => {
  equation += value;
  displayErrorMessage.style.display = "none";
  displayValue.innerHTML = equation;
};

const handleDelete = () => {
  const result = equation.substring(0, equation.length - 1);
  equation = result;
  if (equation.length > 0) {
    displayValue.innerHTML = result;
  } else {
    equation = "";
    displayValue.innerHTML = "0";
  }
};

const handleReset = () => {
  equation = "";
  displayValue.innerHTML = "0";
};

const getResult = () => {
  if (equation.length === 0) return;

  try {
    const result = eval(equation);
    equation = String(result);
    
    displayValue.innerHTML = result;
  } catch (error) {
    displayErrorMessage.style.display = "inline-block";
  }
};
document.addEventListener("keydown", handleKeydown);
