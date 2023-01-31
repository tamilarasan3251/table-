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

// function tamil() {
//   // 1 to 10
//   const start = 0;
//   const end = 500;
//   const range = [...Array(end - start + 1).keys()].map((x) => x + start);
//   console.log(range);
//   const numberToArray = (range) => {
//     const res = [];
//     while (range) {
//       const last = range % 10;
//       res.unshift(last);
//       num = Math.floor(range / 10);
//     }
//     return res;
//   };
//   console.log(numberToArray(range));
// }
// tamil();
// // cls
// console.log(1, +(+3), +(+5));

// let letter = ["a", "c", "b", "d"];
// letter.forEach((v) => {
//   console.log(v);
// });
// letter.sort();
// console.log(letter);
// setInterval(() => {
//   a++;
//   if (a >= 10) {
//     return;
//   }
//   console.log(a);
// }, 1000);
// let f = 0;
// setInterval(() => {
//   f++;
//   if (f >= 10) {
//     return;
//   }
//   console.log(f);
// }, 2000);

// i = 20;
// if (i < 8) {
//   console.log("hai");
// } else {
//   console.log("hello");
// }
// let a=[{name:"tamil"}]

// let d = "tamil";
// let g = "naveen";
// let t = d.split("");
// let u = g.split("");
// // console.log(u);
// // console.log(t);
// let str = "";
// let r = Math.min(t.length, u.length);
// // console.log(r);
// for (let i = 0; i < r; i++) {
//   if (i < t.length) {
//     str += t[i];
//   }
//   console.log(str);
//   if (i < u.length) {
//     str += u[i];
//   }
//   return str;
// }
// console.log(str);

let fname1 = "sandeep";
let lname1 = "kumaryy";
let sp1 = fname1.split("");
let sp2 = lname1.split("");
console.log(sp1);
let output = Math.min(sp1.length + sp2.length);
let mergeString = " ";
console.log(output);
for (let i = 0; i < output.length; i++) {
  if (i < sp1.length) {
    mergeString += sp1[i];
  }
  if (i < sp2.length) {
    mergeString += sp2[i];
  }
  return mergeString;
}
console.log(mergeString);
