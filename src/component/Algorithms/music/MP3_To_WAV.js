import { ffmpeg_run } from "ffmpeg";

export const mp3_to_wav = (file, name, setSuccess) => {
  var buffer = new ArrayBuffer(44 + file.length * 2);
  let dataView = new DataView(buffer);
  let wav = new Blob([dataView], { type: "audio/wav" });
  document.getElementById("downloader").download = name + ".wav";
  document.getElementById("downloader").href = URL.createObjectURL(wav);
  console.log(URL.createObjectURL(wav));
  setSuccess(false);
};
