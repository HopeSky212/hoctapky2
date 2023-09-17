// 11
const deps = {
  data01: [1, 2, 3, [12, 323]],
  data02: [5, 8, 12],
  data03: [5, 14, 79],
  data04: [3, 64, 105],
};

// const deps1 = Object.values(deps.data01[3]);
const newDeps = Object.values(deps);
const result = [newDeps.flat()];
console.log(newDeps);
console.log(result);
// console.log(deps1);
