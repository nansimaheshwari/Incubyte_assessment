function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = /[\\n,]+/;

  if (numbers.startsWith("//")) {
    const newlineIndex = numbers.indexOf("\\n");
    let customDelimiter = "";

    if (newlineIndex !== -1) {
      customDelimiter = numbers.slice(2, newlineIndex);
      numbers = numbers.slice(newlineIndex + 2);
    }
    delimiter = new RegExp(`${customDelimiter}|${delimiter}`, "g");
  }

  const numsArray = numbers.split(delimiter);
  const negatives = numsArray.filter((num) => parseInt(num, 10) < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  const sum = numsArray.reduce(
    (acc, curr) => acc + (parseInt(curr, 10) || 0),
    0
  );
  return sum;
}

function calculate() {
  const input = document.getElementById("numbers").value;
  try {
    const result = add(input);
    document.getElementById("result").textContent = `Result: ${result}`;
  } catch (error) {
    document.getElementById("result").textContent = error.message;
  }
}
