// async functions always return a promise
posts = [
  { name: "Priyadharshan", age: 20, college: "KCT" },
  { name: "KdPink", age: 20, college: "PSG" },
  { name: "Theka", age: 21, college: "Panimalar" },
];

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Has some error");
      } else {
        resolve(posts);
      }
    });
  }, 2000);
}

function addPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      this.posts.push({ post });
      resolve(posts);
    }, 2000);
  });
}
function beforeRenderPosts() {
  document.body.innerHTML = "Loading Users";
  renderPosts();
}
async function formOutput() {
  let output = ``;
  try {
    const posts = await getPosts();
    posts.forEach((post) => {
      output += `<li>
                Name : ${post.name}
                Age : ${post.age}
                College : ${post.college}
            </li>`;
    });
  } catch (error) {
    output = `${error}`;
  }
  return output;
}
async function renderPosts() {
  document.body.innerHTML = await formOutput();
}

renderPosts();
