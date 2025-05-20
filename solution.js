// Facade Pattern Example: Provide simple functions to fetch users, posts, and comments
// Each function hides the complexity of making HTTP requests and returns data directly

function getUsers() {
  // Facade method to get all users
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getPosts() {
  // Facade method to get all posts
  return getFetch("https://jsonplaceholder.typicode.com/posts");
}

function getComments() {
  // Facade method to get all comments
  return getFetch("https://jsonplaceholder.typicode.com/comments");
}

function getUserPosts(userId) {
  // Facade method to get posts for a specific user
  return getFetch("https://jsonplaceholder.typicode.com/posts", {
    userId: userId,
  });
}

// Client code uses the simple facade methods without worrying about HTTP details
getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(`--------${user?.name}  ${user?.email}-----------`);
      posts.forEach((post) => {
        console.log("Post Title: ", post.title);
      });
    });
  });
});

// getFetch acts as a helper to abstract HTTP request logic
function getFetch(url, params = {}) {
  // Underlying implementation uses axios to fetch data
  return axios({
    url: url,
    method: "GET",
    params: params,
  }).then((res) => {
    return res.data;
  });
}

// Alternative implementation using fetch API
// function getFetch(url, params = {}) {
//   const queryString = Object.entries(params)
//     .map((param) => {
//       return `${param[0]}=${param[1]}`;
//     })
//     .join("&");

//   return fetch(`${url}?${queryString}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());
// }
