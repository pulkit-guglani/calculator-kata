const sum = (numbers) => {
  if (!numbers) {
    return 0;
  }
  const numbersList = numbers.split(",");
  if (numbersList?.length === 0) {
    return 0;
  }
  if (numbersList?.length === 1) {
    return numbersList[0];
  }
  let sum = Number(numbersList?.[0]) + Number(numbersList?.[1]) ?? 0;

  return sum;
};

export default sum;
