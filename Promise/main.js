// const cdm = true;
// const cc = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (cdm) {
//       resolve("cai dit me");
//       console.log("cai dit me");
//     } else {
//       reject("khong co gi");
//       console.log("khong co gi");
//     }
//   }, 5000);
// });

// console.log(cc);

// const run = (cc = true) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (cc) {
//         resolve("co cac");
//       } else {
//         reject("cc");
//       }
//     }, 5000);
//   });
// };

// const ccc = run(true);
// ccc.then(
//   (sc) => console.log(sc),
//   (rs) => console.log(rs)
// );

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1");
  }, 5000);
}).then((data) => {
  console.log(data);
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2");
    }, 4000);
  }).then((data) => {
    console.log(data);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("3");
      }, 3000);
    }).then((data) => {
      console.log(data);
    });
  });
});
