/**
 * Algorithm for JPG Compressor
 */
export const JPGCompressor = dataURL => {
  var canvas = document.getElementById("jpgtopng");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  image.onload = function() {
    var width = image.naturalWidth || image.width;
    var height = image.naturalHeight || image.height;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    console.log(width, height);
    ctx.drawImage(image, 0, 0, width, height);
  };
  image.src = dataURL;
};
export const downloadJPG = name => {
  //file name as argument
  document.getElementById("downloader").download = name + ".jpg";
  // converting data uri to blob aken form github gist
  let dataURI = document
    .getElementById("jpgtopng")
    .toDataURL("image/jpg", 0.7)
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
