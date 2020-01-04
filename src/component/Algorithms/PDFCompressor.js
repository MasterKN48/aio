/**
 * Algorithm for PDF Compressor
 */
import jsPDF from "jspdf";

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
  let dataURI = document
    .getElementById("jpgtopng")
    .toDataURL("image/jpeg", 0.3);
  var doc = new jsPDF("p", "mm", "a4", true);
  doc.addImage(dataURI, "JPEG", 5, 0, 210, 297, undefined, "FAST");
  doc.save(name + ".pdf");
};
