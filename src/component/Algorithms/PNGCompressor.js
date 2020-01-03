/**
 * Algorithm for JPG Compressor
 */
export const PNGCompressor = dataURL => {
  var canvas = document.getElementById("jpgtopng");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  image.onload = function() {
    ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
  };
  image.src = dataURL;
  setTimeout(() => {
    let dataURI = document
      .getElementById("jpgtopng")
      .toDataURL("image/png", 0.03)
      .replace(/^data:image\/[^;]/, "data:application/octet-stream");
    var head = "data:image/png;base64,";
    var imgFileSize =
      Math.round(((dataURI.length - head.length) * 3) / 4) / 1024;
    document.getElementById("size").innerText =
      "File Size: " + imgFileSize.toFixed(2) + "kb";
  }, 3000);
};
export const downloadPNG = name => {
  //file name as argument
  document.getElementById("downloader").download = name + ".png";
  // converting data uri to blob aken form github gist
  let dataURI = document
    .getElementById("jpgtopng")
    .toDataURL("image/png", 0.001)
    .replace(/^data:image\/[^;]/, "data:application/octet-stream");
  let byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  let mimeString = dataURI
    .split(",")[0]
    .split(":")[1]
    .split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  let arrayBuffer = new ArrayBuffer(byteString.length);
  let _ia = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    _ia[i] = byteString.charCodeAt(i);
  }

  let dataView = new DataView(arrayBuffer);
  let blob = new Blob([dataView], { type: mimeString });

  document.getElementById("downloader").href = URL.createObjectURL(blob);
};
