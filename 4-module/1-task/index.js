function makeFriendsList(friends) {
  let body = document.querySelector('body');
  let ul = document.createElement('UL');

  body.append(ul);

  let mapFriends = friends.map((friend) => `${friend.firstName} ${friend.lastName}`);

  for (let item of mapFriends) {
    ul.insertAdjacentHTML('afterBegin', `<li>${item}</li>`);
  }
  return ul
}

