// const users = [
//   "john doe",
//   "slack",
//   "david",
//   "franklin",
//   "jane",
//   "jill",
//   "harry",
//   "jim",
//   "jonny",
// ];

// console.log(users);

// for (let i = 0; i < users.length; i++) {
//   if (users[i] === "jane") {
//     console.log("girl : jane");
//   } else {
//     console.log(users[i]);
//   }
// }

const user = [
  { name: "john", age: 25 },
  { name: "jane", age: 22 },
  { name: "doe", age: 35 },
  { name: "smith", age: 30 },
  { name: "alex", age: 36 },
];


for (let i = 0; i < user.length; i++) {
  if (user[i].name === "jane") {
      console.log(user[i].age);
      user[i].age = 23
  } else {
    console.log(user[i].name);
  }
}

const person = [
  { id: 1, password: 102 },
  { id: 2, password: 105 },
  { id: 3, password: 103 },
  { id: 4, password: 104 },
  { id: 5, password: 101 },
];

for (let i = 0; i < person.length; i++) {
  if (person[i].id === 4 && person[i].password === 104) {
    console.log("Login successful");
  }
}

