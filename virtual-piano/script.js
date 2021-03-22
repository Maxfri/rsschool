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

function outpressKey(key) {
  key.classList.remove("piano-key-active");
}

function pressKey(event) {
  event.currentTarget.classList.add("piano-key-active");
  let note = document.querySelector(
    `audio[data-letter="${event.currentTarget.getAttribute("data-letter")}"`
  );
  note.currentTime = 0;
  note.play();
}

// function playAudio() {
//   audio.forEach((element) => {
//     document.addEventListener("click", function (event) {
//       if (event.target.dataset.note == element.dataset.note) {
//         event.target.classList.add("piano-key-active");
//         console.log(element);
//         element.currentTime = 0;
//         element.play();
//       }
//     });
//   });
// }

pianoКeys.forEach((key, iKey) => {

  key.addEventListener("mousedown", (event) => {
    pressKey(event);
    activeNote = iKey;

    document.addEventListener("mouseup", (event) => {
      setTimeout(outpressKey, 300, key);
    });

    pianoКeys.forEach((key) => {
      mouseOver(key);
    });

  });
  window.addEventListener("keydown", (event) => {
    let keyCode;
    if (event) {
      keyCode = event.keyCode;
      audio.forEach((element) => {
        if (keyCode == element.dataset.keycode) {
          let keyNote = document
            .querySelector(`piano-key[data-keycode="${element.dataset.keycode}"]`);
          //keyNote.classList.add("piano-key-active");
          element.currentTime = 0;
          element.play();
        }
      });
    } else if (event) {
      key = event.which;
    }
  });
});

function mouseOver(key) {
  key.addEventListener("mouseover", (event) => {
    pressKey(event);
  });
}
