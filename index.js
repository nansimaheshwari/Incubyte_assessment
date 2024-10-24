function add(numbers) {
    if (numbers === "") return 0;
    const numsArray = numbers.split(",");
    const sum = numsArray.reduce((acc, curr) => acc + parseInt(curr), 0);
    return sum;
  }
  
function calculate() {
  const input = document.getElementById("numbers").value;
  const result = add(input);
  document.getElementById("result").textContent = `Result: ${result}`;
}
