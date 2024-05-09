function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  document.body.append(ul);
  // Вариант без forEach

  // let mapFriends = friends.map((friend) => `${friend.firstName} ${friend.lastName}`);

  // for (let item of mapFriends) {
  //   ul.insertAdjacentHTML('beforeEnd', `<li>${item}</li>`);
  // }

  friends.forEach(friend => { // Вариант с forEach
    ul.insertAdjacentHTML('beforeEnd', `<li>${friend.firstName} ${friend.lastName}</li>`);
  })

  return ul
}
