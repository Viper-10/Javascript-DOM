todos = [];

async function getPostsFromServer() {
  const todoIds = [];
  const MAX_POSTS = 30;
  for (let i = 1; i <= MAX_POSTS; ++i) {
    todoIds.push(i);
  }

  const url = "https://jsonplaceholder.typicode.com/todos/";

  todos = await Promise.all(
    todoIds.map(async (id) => {
      const response = await fetch(`${url}${id}`);
      return await response.json();
    })
  );
}
async function renderInitialPosts() {
  await getPostsFromServer();
}

renderInitialPosts();
