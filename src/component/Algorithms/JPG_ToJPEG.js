/**Algo
 * 1-> Converting image to base 64.(In main file)
 * 2-> pass base64 to function.
 * 3-> create canvas with that base64 data uri.
 * 4-> keep mind with window.innerHieght and width
 * 5-> convert canvas to image by toDataUrl() function in js. (In main file)
 */

export const JpgToJPEGConvertor = dataURL => {
  var canvas = document.getElementById("jpgtopng");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  //console.log(window.innerWidth, window.innerHeight);
  image.onload = function() {
    // let width = image.naturalWidth || image.width;
    // let height = image.naturalHeight || image.height;
    //console.log(width, height);
    ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
  };
  image.src = dataURL;
};
export const downloadJPEG = name => {
  //file name as argument
  document.getElementById("downloader").download = name + ".jpeg";
  document.getElementById("downloader").href = document
    .getElementById("jpgtopng")
    .toDataURL("image/jpeg", 1.0)
    .replace(/^data:image\/[^;]/, "data:application/octet-stream");
};
