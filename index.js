function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = /[\\n,]+/;

  if (numbers.startsWith("//")) {
    const newlineIndex = numbers.indexOf("\\n");
    let customDelimiter = "";

    if (newlineIndex !== -1) {
      customDelimiter = numbers.slice(2, newlineIndex);
      numbers = numbers.slice(newlineIndex + 2);
      console.log(customDelimiter, numbers);
    }
    delimiter = new RegExp(`${customDelimiter}|${delimiter}`, "g");
    console.log(delimiter, "f");
  }

  const numsArray = numbers.split(delimiter);
  console.log(numsArray);
  const sum = numsArray.reduce((acc, curr) => acc + parseInt(curr), 0);
  return sum;
}

function calculate() {
  const input = document.getElementById("numbers").value;
  const result = add(input);
  document.getElementById("result").textContent = `Result: ${result}`;
}
