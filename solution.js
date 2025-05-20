class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "Bob";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUserById(id) {
  const found = users.find((user) => user.id === id);
  if (found != null) return found;
  else return new NullUser();
}

function printUser(id) {
  const user = getUserById(id);
  console.log(`Hello ${name}`);

  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You do not have access");
  }
}
