const validCui = (cui) => {
  let reverseCui = cui.toString().split("").reverse();
  const control = reverseCui[0];

  reverseCui.shift();

  if (reverseCui.length > 10 || reverseCui.length < 4) {
    return false;
  }

  const keyTest = ["2", "3", "5", "7", "1", "2", "3", "5", "7"];
  let sum = 0;

  reverseCui.forEach((num, index) => (sum += num * keyTest[index]));

  sum = (sum * 10) % 11;

  if (sum == 10) {
    sum = 0;
  }

  if (control != sum) {
    return false;
  }

  return true;
};
