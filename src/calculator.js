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
    delimiter = delimiter.slice(1, -1);
  }
  const splitRegex = new RegExp(`[${delimiter}\n]`);
  const numbersList = numbersString.split(splitRegex);

  if (numbersList?.length === 0) {
    return 0;
  }

  let sum = 0;
  let negative = [];

  numbersList.forEach((number) => {
    if (number) {
      if (!isNaN(Number(number))) {
        if (Number(number) < 0) {
          negative.push(Number(number));
        } else if (Number(number) <= 1000) {
          sum += Number(number);
        }
      }
    }
  });

  if (negative.length > 0) {
    throw new Error("negative numbers not allowed: " + negative);
  }
  return sum;
};

export default sum;
