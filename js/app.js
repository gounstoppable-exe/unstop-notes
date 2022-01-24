console.log("app.js loaded.");
showNotes();

let addBtn = document.getElementById("addNote");
addBtn.addEventListener("click", function () {
  let noteText = document.getElementById("noteText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(noteText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  //   console.log(notesObj);
  noteText.value = "";

  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard glass">
      <h1>NOTE ${index + 1}:</h1>
      <p id="note">${element}</p>
      <button class="glass" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
  </div>`;
  });

  let notesContainer = document.getElementById("notesContainer");
  if (notesObj != 0) {
    notesContainer.innerHTML = html;
  }else{
      notesContainer.innerHTML = `<p class="defaultText">Your note space seems empty, Go add something amazing!</p>`
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
