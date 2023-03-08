const check = (arr1, arr2) => {
  let arr = [];
  arr1.forEach((item) => {
    if (arr2.includes(item)) {
      arr.push(item);
    }
  });
  return arr;
};
