function selectChord(chord) {
  const subButtons = document.getElementById("subButtons");

  subButtons.innerHTML = `
    <button onclick="showChord('${chord}', '${chord}.jpg')">${chord.toUpperCase()}</button>
    <button onclick="showChord('${chord}', '${chord}7.jpg')">${chord.toUpperCase()}7</button>
    <button onclick="showChord('${chord}', '${chord}m.jpg')">${chord.toUpperCase()}m</button>
  `;

  showChord(chord, `${chord}.jpg`);
}

function showChord(folder, file) {
  document.getElementById("chordImage").src = `images/${folder}/${file}`;
}

selectChord("c");
function showChord(folder, file) {

  document.getElementById("chordImage").src =
    `images/${folder}/${file}`;

  speakChord(file);
}

function speakChord(file) {

  let name = file.replace(".jpg", "");

  const speech = new SpeechSynthesisUtterance(name);

  speech.lang = "en-US";

  speechSynthesis.speak(speech);
}