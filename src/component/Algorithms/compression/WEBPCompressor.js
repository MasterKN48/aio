/**
 * Algorithm for JPG Compressor
 */
export const WEBPCompressor = (dataURL, setLoading, setSucess) => {
  var canvas = document.getElementById("jpgtopng");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
  };
  image.src = dataURL;
  setSucess(true);
  setLoading(false);
  let dataURI = document
    .getElementById("jpgtopng")
    .toDataURL("image/webp", 1.0)
    .replace(/^data:image\/[^;]/, "data:application/octet-stream");
  var head = "data:image/webp;base64,";
  var imgFileSize = Math.round(((dataURI.length - head.length) * 3) / 4) / 1024;
  document.getElementById("size").innerText =
    "File Size: " + imgFileSize.toFixed(2) + "kb \nFile size may vary";
};
export const downloadWEBP = (name, setSucess, ratio) => {
  //file name as argument
  document.getElementById("downloader").download = name + ".webp";
  // converting data uri to blob aken form github gist
  let si = (100 - ratio) / 100;
  if (si === 1) {
    si = 1.0;
  }

  let dataURI = document
    .getElementById("jpgtopng")
    .toDataURL("image/webp", si)
    .replace(/^data:image\/[^;]/, "data:application/octet-stream");
  let byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  let arrayBuffer = new ArrayBuffer(byteString.length);
  let _ia = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    _ia[i] = byteString.charCodeAt(i);
  }

  let dataView = new DataView(arrayBuffer);
  let blob = new Blob([dataView], { type: mimeString });

  document.getElementById("downloader").href = URL.createObjectURL(blob);
  setSucess(false);
};
