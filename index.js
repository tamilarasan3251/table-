// const arry = [1, 2, 1, 3, 4, 3, 5, 5];

// const toFindDuplicates = (arry) =>
//   arry.filter((item, index) => arry.indexOf(item) !== index);
// const duplicateElements = toFindDuplicates(arry);
// console.log(dulicateElements);

// duplicate
// const arry1 = [1, 2, 1, 3, 10, 10, 4, 3, 5, 5];

// const ee = (arry1) =>
//   arry1.filter((val, index) => arry1.indexOf(val) !== index);
// const dd = ee(arry1);

// console.log(dd);
// Range

// function numbers_ranges(x, y) {
//   if (
//     (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
//     (x >= 70 && x <= 100 && y >= 70 && y <= 100)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(numbers_ranges(44, 56));
// console.log(numbers_ranges(70, 95));
// console.log(numbers_ranges(50, 89));

function tamil() {
  // 1 to 10
  const start = 0;
  const end = 500;
  const range = [...Array(end - start + 1).keys()].map((x) => x + start);
  console.log(range);
  const numberToArray = (range) => {
    const res = [];
    while (range) {
      const last = range % 10;
      res.unshift(last);
      num = Math.floor(range / 10);
    }
    return res;
  };
  console.log(numberToArray(range));
}
tamil();
// cls
