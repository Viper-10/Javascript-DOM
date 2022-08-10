todos = [];
let currPage = 0;
const lastPage = 4;

const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", () => {
  currPage -= 1;
  getNext5Todos();
});
nextButton.addEventListener("click", () => {
  currPage += 1;
  getNext5Todos();
});

function renderFooter() {
  (() => {
    const pageSpan = document.querySelector(".page-number");
    pageSpan.textContent = `${currPage + 1}/${lastPage + 1}`;
  })();

  if (currPage === 0) {
    prevButton.disabled = true;
  } else if (currPage === lastPage) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
function renderTodos() {
  const list = document.getElementById("todo-list");

  let todosJSX = ``;

  todos.forEach((todo) => {
    todosJSX += `<li class="todo-item">
      <div class="todo-content">${todo.title}</div>
            <div class="actions">
              <div class="button delete-button">Delete</div>
              <div class="button finish-button">Finish</div>
              <div class="button edit-button">Edit</div>
            </div>
    </li>`;
  });

  list.innerHTML = todosJSX;
}
async function getTodosFromServer(currPage) {
  const todoIds = [];
  for (let i = currPage * 5 + 1; i <= currPage * 5 + 5; ++i) {
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
async function getNext5Todos() {
  await getTodosFromServer(currPage);

  renderTodos();
  renderFooter();
}

getNext5Todos(currPage);
