const chordNames = ["c", "d", "e", "f", "g", "a", "b"];

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

function startVoice() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("このブラウザは音声認識に対応していません。iPhoneはSafariで試してください。");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.interimResults = false;
  recognition.continuous = false;

  recognition.start();

  recognition.onresult = function(event) {
    let text = event.results[0][0].transcript.toLowerCase();
    text = text.replace(/\s/g, "");

    if (text.includes("c")) selectChord("c");
    else if (text.includes("d")) selectChord("d");
    else if (text.includes("e")) selectChord("e");
    else if (text.includes("f")) selectChord("f");
    else if (text.includes("g")) selectChord("g");
    else if (text.includes("a")) selectChord("a");
    else if (text.includes("b")) selectChord("b");
    else alert("認識できませんでした：" + text);
  };
}

selectChord("c");
document.getElementById("voiceBtn")
.addEventListener("click", startVoice);