/**
 * Algorithm for PDF Compressor
 */

export const PDFCompressor = dataURL => {
  console.log(dataURL);
  var canvas = document.getElementById("jpgtopng");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  image.onload = function() {
    ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
  };
  image.src = dataURL;
};
export const downloadPDF = name => {
  //file name as argument
  document.getElementById("downloader").download = name + ".pdf";
  // converting data uri to blob aken form github gist
  //   let dataURI = document
  //     .getElementById("jpgtopng")
  //     .toDataURL("image/jpeg", 0.3);
};
