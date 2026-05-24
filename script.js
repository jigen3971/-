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
    alert("音声認識に対応していません");
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

    let chord = "";

    if (text.includes("シー") || text.includes("c")) chord = "c";
    else if (text.includes("ディー") || text.includes("d")) chord = "d";
    else if (text.includes("イー") || text.includes("e")) chord = "e";
    else if (text.includes("エフ") || text.includes("f")) chord = "f";
    else if (text.includes("ジー") || text.includes("g")) chord = "g";
    else if (text.includes("エー") || text.includes("a")) chord = "a";
    else if (text.includes("ビー") || text.includes("b")) chord = "b";

    if (!chord) {
      alert("認識できませんでした：" + text);
      return;
    }

    selectChord(chord);

    if (
      text.includes("セブン") ||
      text.includes("セブンス") ||
      text.includes("なな") ||
      text.includes("7")
    ) {
      showChord(chord, `${chord}7.jpg`);
    }
    else if (
      text.includes("マイナー") ||
      text.includes("minor") ||
      text.includes("m")
    ) {
      showChord(chord, `${chord}m.jpg`);
    }
    else {
      showChord(chord, `${chord}.jpg`);
    }
  };
}

document.getElementById("voiceBtn").addEventListener("click", startVoice);

selectChord("c");