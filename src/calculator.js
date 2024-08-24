const sum = (numbers) => {
  if (!numbers) {
    return 0;
  }
  const numbersList = numbers.split(/[\n,]/);
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
