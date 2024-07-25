// JavaScript for notes feature

// DOM elements for notes
var noteInput = document.getElementById('noteInput');
var saveNoteButton = document.getElementById('saveNote');
var noteList = document.getElementById('noteList');

// Function to save a note
function saveNote() {
  var noteText = noteInput.value.trim();
  if (noteText !== "") {
    var listItem = document.createElement('li');
    listItem.textContent = noteText;

    // Add delete button to each note
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      noteList.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);

    noteList.appendChild(listItem);
    noteInput.value = ""; // Clear the input field
  }
}

// Event listener for saving notes
saveNoteButton.addEventListener('click', saveNote);
