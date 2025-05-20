function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

function getComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

getUsers().then((users) => {
  users.forEach((user) => {
    console.log(`User: ${user.name}`);
    console.log(`Email: ${user.email}`);
  });
});
