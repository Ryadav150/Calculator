function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate() {
    let result = document.getElementById('result').value;
    let calculation = eval(result);
    document.getElementById('result').value = calculation;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  