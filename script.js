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
  document.getElementById("chordImage").src =
    `images/${folder}/${file}`;
}

function startVoice() {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

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

    let text =
      event.results[0][0].transcript.toLowerCase();

    text = text.replace(/\s/g, "");

    console.log(text);

    // C
    if (text.includes("c7") || text.includes("シーセブン")) {
      showChord("c", "c7.jpg");
    }
    else if (text.includes("cm") || text.includes("シーマイナー")) {
      showChord("c", "cm.jpg");
    }
    else if (text.includes("c") || text.includes("シー")) {
      selectChord("c");
    }

    // D
    else if (text.includes("d7") || text.includes("ディーセブン")) {
      showChord("d", "d7.jpg");
    }
    else if (text.includes("dm") || text.includes("ディーマイナー")) {
      showChord("d", "dm.jpg");
    }
    else if (text.includes("d") || text.includes("ディー")) {
      selectChord("d");
    }

    // E
    else if (text.includes("e7") || text.includes("イーセブン")) {
      showChord("e", "e7.jpg");
    }
    else if (text.includes("em") || text.includes("イーマイナー")) {
      showChord("e", "em.jpg");
    }
    else if (text.includes("e") || text.includes("イー")) {
      selectChord("e");
    }

    // F
    else if (text.includes("f7") || text.includes("エフセブン")) {
      showChord("f", "f7.jpg");
    }
    else if (text.includes("fm") || text.includes("エフマイナー")) {
      showChord("f", "fm.jpg");
    }
    else if (text.includes("f") || text.includes("エフ")) {
      selectChord("f");
    }

    // G
    else if (text.includes("g7") || text.includes("ジーセブン")) {
      showChord("g", "g7.jpg");
    }
    else if (text.includes("gm") || text.includes("ジーマイナー")) {
      showChord("g", "gm.jpg");
    }
    else if (text.includes("g") || text.includes("ジー")) {
      selectChord("g");
    }

    // A
    else if (text.includes("a7") || text.includes("エーセブン")) {
      showChord("a", "a7.jpg");
    }
    else if (text.includes("am") || text.includes("エーマイナー")) {
      showChord("a", "am.jpg");
    }
    else if (text.includes("a") || text.includes("エー")) {
      selectChord("a");
    }

    // B
    else if (text.includes("b7") || text.includes("ビーセブン")) {
      showChord("b", "b7.jpg");
    }
    else if (text.includes("bm") || text.includes("ビーマイナー")) {
      showChord("b", "bm.jpg");
    }
    else if (text.includes("b") || text.includes("ビー")) {
      selectChord("b");
    }

    else {
      alert("認識できませんでした：" + text);
    }

  };

}

document
  .getElementById("voiceBtn")
  .addEventListener("click", startVoice);

selectChord("c");