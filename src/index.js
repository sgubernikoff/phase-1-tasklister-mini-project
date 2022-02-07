document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    createDescription(e.target.new_task_description.value);
    form.reset();
  });
});

function createDescription(task) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  let drop = document.createElement("select");
  let option = document.createElement("option");
  btn.addEventListener("click", function (e) {
    p.remove();
  });
  p.textContent = `${task} `;
  btn.textContent = "  X ";
  option.textContent = "Red" "Green" "Yellow";
  p.appendChild(btn);
  document.querySelector("#tasks").appendChild(p);
  document.querySelector("#tasks").appendChild(drop);
  drop.appendChild(option);
}
