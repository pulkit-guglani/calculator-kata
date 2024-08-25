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
  const splitRegex = new RegExp(`[${delimiter}\n]`);
  const numbersList = numbersString.split(splitRegex);

  if (numbersList?.length === 0) {
    return 0;
  }

  let sum = 0;
  numbersList.forEach((number) => {
    if (number) {
      if (!isNaN(Number(number))) {
        sum += Number(number);
      }
    }
  });
  return sum;
};

export default sum;
