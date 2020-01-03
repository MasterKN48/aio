const JpgToPngConvertor = dataURL => {
  var canvas = document.getElementById("jpgtopng");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  image.onload = function() {
    ctx.drawImage(image, 0, 0);
  };
  image.src = dataURL + "";
};

export default JpgToPngConvertor;
