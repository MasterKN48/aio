const JpgToPngConvertor = dataURL => {
  var canvas = document.getElementById("jpgtopng");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  image.onload = function() {
    let width = image.naturalWidth || image.width;
    let height = image.naturalHeight || image.height;
    console.log(width, height);
    ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
  };
  image.src = dataURL;
};

export default JpgToPngConvertor;
