// ===============================
// 1. SELECT DOM ELEMENTS
// ===============================

const textInput = document.getElementById("textInput");

const charactersCount = document.getElementById("charactersCount");
const wordsCount = document.getElementById("wordsCount");
const sentencesCount = document.getElementById("sentencesCount");
const spacesCount = document.getElementById("spacesCount");

// ===============================
// 2. CREATE MAIN UPDATE FUNCTION
// ===============================

function updateStats() {
  const text = textInput.value;
  const characters = text.length;
  const trimmedText = text.trim();

  let words = 0;

  if (trimmedText !== "") {
    words = trimmedText.split(/\s+/).length;
  }

  const sentencesMatch = text.match(/[.!?]+/g);
  const sentences = sentencesMatch ? sentencesMatch.length : 0;

  const spacesMatch = text.match(/ /g);
  const spaces = spacesMatch ? spacesMatch.length : 0;

  charactersCount.textContent = characters;
  wordsCount.textContent = words;
  sentencesCount.textContent = sentences;
  spacesCount.textContent = spaces;
}

/* ===============================
   3. EVENT LISTENER
================================= */

textInput.addEventListener("input", updateStats);

/* ===============================
   4. INITIALIZE APP
================================= */

updateStats();
