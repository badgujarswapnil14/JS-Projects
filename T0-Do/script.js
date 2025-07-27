const input = document.getElementById("input");
const btn = document.getElementById("btn");
const tasklist = document.getElementById("tasklist");

btn.addEventListener("click", function () {
  const task = input.value;
  if (task === "") {
    alert("Error Input is Empty");
    // return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "❌";

  deletebtn.addEventListener("click", function() {
    li.remove();
  });
  li.appendChild(deletebtn)
  if(task !== ""){

      tasklist.appendChild(li);
  }

  input.value = "";
});
