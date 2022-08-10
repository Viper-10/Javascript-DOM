function getPromise1() {
  return new Promise((resolve, reject) => {
    const posts = [];

    setTimeout(() => {
      try {
        posts.push("Post 1");
        posts.push("Post 2");
        posts.push("Post 3");
        resolve(() => {
          console.log(posts);
        });
      } catch (error) {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

async function foo() {
  try {
    const response = await getPromise1();
    console.log(response);
    response();
  } catch (error) {
    console.error(error);
  }

  const promise1 = getPromise1();
  const promise2 = getPromise1();
  const promise3 = getPromise1();

  const resolvedArray = await Promise.all([promise1, promise2, promise3]);
  resolvedArray[0]();
  resolvedArray[1]();
  resolvedArray[2]();
}

foo();
