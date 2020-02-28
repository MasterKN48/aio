var toWav = require("audiobuffer-to-wav");
var xhr = require("xhr");
var context = new AudioContext();

var audioContext = new (window.AudioContext || window.webkitAudioContext)();

export const mp3_to_wav = (file, name, setSuccess) => {
  // request the MP3 as binary
  xhr(
    {
      uri: file,
      responseType: "arraybuffer"
    },

    function(err, body, resp) {
      var anchor = document.createElement("a");
      document.body.appendChild(anchor);
      anchor.style = "display: none";
      if (err) throw err;
      // decode the MP3 into an AudioBuffer
      audioContext.decodeAudioData(resp, function(buffer) {
        // encode AudioBuffer to WAV
        var wav = toWav(buffer);
        var blob = new window.Blob([new DataView(wav)], {
          type: "audio/wav"
        });

        var url = window.URL.createObjectURL(blob);
        anchor.href = url;
        anchor.download = name + ".wav";
        anchor.click();
        window.URL.revokeObjectURL(url);
        setSuccess(false);
      });
    }
  );
};
