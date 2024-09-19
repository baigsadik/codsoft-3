function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let display = document.getElementById('display').value;
  document.getElementById('display').value = display.slice(0, -1);
}

function appendCharacter(char) {
  document.getElementById('display').value += char;
}

function calculateResult() {
  try {
      let result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
  } catch (e) {
      document.getElementById('display').value = 'Error';
  }
}
