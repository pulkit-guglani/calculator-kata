const getSumOfNumbersInArray = (numbersList) => {
  let sum = 0;
  const negative = [];

  if (numbersList?.length === 0) {
    return 0;
  }

  numbersList.forEach((number) => {
    if (number) {
      const numConverted = Number(number);
      if (!isNaN(numConverted)) {
        if (numConverted < 0) {
          negative.push(numConverted);
        } else if (numConverted <= 1000) {
          sum += numConverted;
        }
      }
    }
  });

  if (negative.length > 0) {
    throw new Error("negative numbers not allowed: " + negative);
  }
  return sum;
};

const sum = (numbers) => {
  if (!numbers) {
    return 0;
  }

  const delimiterRegex = /^\/\/(.+)\n([\s\S]*)$/;
  const match = numbers.match(delimiterRegex);

  let delimiter = ","; // default delimiter
  let numbersString = numbers;

  if (match) {
    delimiter = match[1];
    numbersString = match[2];
  } else {
    numbersString = numbers;
  }
  if (delimiter.length > 1) {
    delimiter = delimiter?.slice(1, -1)?.split("][")?.join("|");
  }
  const splitRegex = new RegExp(`[${delimiter}\n]`);
  const numbersList = numbersString
    .split(splitRegex)
    ?.filter((s) => s.length > 0);

  const sum = getSumOfNumbersInArray(numbersList);

  return sum;
};

export default sum;
