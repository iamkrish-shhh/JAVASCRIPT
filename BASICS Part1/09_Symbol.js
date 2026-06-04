// const user = {
//   id: 123
// };

// // Another developer adds:
// user.id = 456;

// console.log(user.id); // 456


const id = Symbol("id");

const user = {
  name: "Krish",
  [id]: 123
};

user.id = 456;

console.log(user[id]); // 123