// let user1 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 21,
//   "name": "Golden Branch",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let user2 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 15,
//   "name": "Alexandr Semionov",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let users = [user1, user2]

// console.log(showSalary(users, 30));

function showSalary(users, age) {
  let usersFilter = users.filter(function (user) { return user.age <= age.toString() });
  return usersFilter.map(function (user) { return `${user.name}, ${user.balance}` }).join('\n')
  // return users.filter(function (user) { return user.age <= age.toString() }).map(function (user) { return `${user.name}, ${user.balance}` }).join('\n') // Так тоже работает!
}
