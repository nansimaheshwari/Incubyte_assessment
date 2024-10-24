function extractCustomDelimiter(numbers) {
  const newlineIndex = numbers.indexOf("\n");
  if (newlineIndex !== -1) {
    const customDelimiter = numbers.slice(2, newlineIndex);
    numbers = numbers.slice(newlineIndex + 1);
    return { customDelimiter, numbers };
  }
  return { customDelimiter: "", numbers };
}

function createDelimiterRegex(customDelimiter) {
  return new RegExp(`${customDelimiter}|[\n,]+`, "g");
}

function checkForNegatives(numsArray) {
  const negatives = numsArray.filter((num) => parseInt(num, 10) < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
}

function sumNumbers(numsArray) {
  return numsArray.reduce((acc, curr) => acc + (parseInt(curr, 10) || 0), 0);
}

function add(numbers) {
  if (numbers === "") return 0;

  let customDelimiter = "";
  if (numbers.startsWith("//")) {
    const extracted = extractCustomDelimiter(numbers);
    customDelimiter = extracted.customDelimiter;
    numbers = extracted.numbers;
  }

  const delimiter = createDelimiterRegex(customDelimiter);
  const numsArray = numbers.split(delimiter);

  checkForNegatives(numsArray);
  return sumNumbers(numsArray);
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
