const piano = document.querySelector(".piano");
const pianoКeys = document.querySelectorAll(".piano-key");
const audio = document.querySelectorAll("audio");
const fullscreen = document.querySelector(".fullscreen");
const notes = document.querySelector(".btn-notes");
const letters = document.querySelector(".btn-letters");
let activeNote;
let flag = false;

fullscreen.addEventListener("click", getFullscreen);

notes.addEventListener("click", switchNotes);
letters.addEventListener("click", switchNotes);

function switchNotes(event) {
  if (!event.currentTarget.classList.contains("btn-active")) {
    notes.classList.toggle("btn-active");
    letters.classList.toggle("btn-active");
    pianoКeys.forEach((key) => {
      key.classList.toggle("piano-key-letter");
    });
  }
}

function getFullscreen() {
  return flag ? closeFullscreen() : openFullscreen();
}

function openFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    flag = true;
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    flag = false;
  }
}

function outpressKey() {
  setTimeout(() => {
    pianoКeys.forEach((element) => {
        element.classList.remove("piano-key-active");
    })
  }, 300);
}

function pressKey(event) {
  activeNote = event.currentTarget;
  activeNote.classList.add("piano-key-active");
  let note = document.querySelector(
    `audio[data-letter="${activeNote.getAttribute("data-letter")}"`
  );
  note.currentTime = 0;
  note.play();
}

pianoКeys.forEach((key, iKey) => {
  key.addEventListener("mousedown", (event) => {

    pressKey(event);
    document.addEventListener("mouseup", (event) => {
      pianoКeys.forEach((key) => {
        key.removeEventListener("mouseover", pressKey);
        key.removeEventListener("mouseout", outpressKey);
      });
      outpressKey();
    });

    pianoКeys.forEach((key) => {
      key.addEventListener("mouseover", pressKey);
      key.addEventListener("mouseout", outpressKey);
    });
  });
});

window.addEventListener("keydown", (event) => {
  pianoКeys.forEach((key) => {
    if (event.keyCode == key.dataset.keycode) {
      key.classList.add("piano-key-active");
      let note = document.querySelector(
        `audio[data-letter="${key.getAttribute("data-letter")}"`
      );
      note.currentTime = 0;
      note.play();
      setTimeout(outpressKey, 300, key);
    }
  });
});
