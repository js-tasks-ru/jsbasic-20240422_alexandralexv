// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let users = [vasya, petya, masha];

// console.log(namify(users));

function namify(users) {
    return users.map(function (user) { return user.name });
}
