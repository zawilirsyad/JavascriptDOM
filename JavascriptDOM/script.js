document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const dateInput = document.getElementById("date-input");
  const submitBtn = document.getElementById("submit-btn");
  const todoTableBody = document.getElementById("todo-table-body");

  // ID
  let todoId = 1;

  // Mengganti warna background
  document.getElementById("bg-red").onclick = function () {
    document.body.style.backgroundColor = "red";
  };
  document.getElementById("bg-blue").onclick = function () {
    document.body.style.backgroundColor = "blue";
  };
  document.getElementById("bg-white").onclick = function () {
    document.body.style.backgroundColor = "white";
  };

  // Buka Google dan YouTube
  document.getElementById("google-btn").onclick = function () {
    window.location.href = "https://www.google.com";
  };

  document.getElementById("youtube-btn").onclick = function () {
    window.location.href = "https://www.youtube.com";
  };

  // tambah todo to table
  submitBtn.onclick = function () {
    if (todoInput.value === "" || dateInput.value === "") {
      alert("Please fill out both the todo and date fields.");
      return;
    }

    const newRow = document.createElement("tr");

    // Kolom ID
    const idCell = document.createElement("td");
    idCell.innerHTML = todoId++;
    newRow.appendChild(idCell);

    // Kolom Todo
    const todoCell = document.createElement("td");
    todoCell.innerHTML = todoInput.value;
    newRow.appendChild(todoCell);

    // Kolom Tanggal
    const dateCell = document.createElement("td");
    dateCell.innerHTML = dateInput.value;
    newRow.appendChild(dateCell);

    // Kolom Action (untuk tombol edit dan delete)
    const actionCell = document.createElement("td");

    // Tombol Edit
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.onclick = function () {
      // Mengisi form dengan data yang ada
      todoInput.value = todoCell.innerHTML;
      dateInput.value = dateCell.innerHTML;

      // Ketika disimpan, update baris tersebut
      submitBtn.onclick = function () {
        if (todoInput.value === "" || dateInput.value === "") {
          alert("Silakan isi kedua kolom todo dan tanggal.");
          return;
        }

        todoCell.innerHTML = todoInput.value;
        dateCell.innerHTML = dateInput.value;

        // Reset tombol submit ke fungsi menambah todo setelah edit selesai
        submitBtn.onclick = addTodo;
      };
    };
    actionCell.appendChild(editBtn);

    // Tombol Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function () {
      newRow.remove();
    };
    actionCell.appendChild(deleteBtn);

    newRow.appendChild(actionCell);
    todoTableBody.appendChild(newRow);

    // Reset input form
    todoInput.value = "";
    dateInput.value = "";
  };

  // Fungsi untuk menambah todo (dibutuhkan saat edit selesai)
  function addTodo() {
    submitBtn.onclick();
  }
});
