/**Algo
 * 1-> Converting image to base 64.(In main file)
 * 2-> pass base64 to function.
 * 3-> create canvas with that base64 data uri.
 * 4-> keep mind with window.innerHieght and width
 * 5-> convert canvas to image by toDataUrl() function in js. (In main file)
 */

export const PngToAllConvertor = (files) => {
  for (const file in Object.entries(files)) {
    //console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(files[file]);
    reader.onload = function () {
      const dataURL = reader.result;
      let id = "canvas " + file;
      var canvas = document.getElementById(id);
      var ctx = canvas.getContext("2d");
      var image = new Image();
      image.onload = function () {
        var width = image.naturalWidth || image.width;
        var height = image.naturalHeight || image.height;
        ctx.canvas.width = width;
        ctx.canvas.height = height;
        ctx.drawImage(image, 0, 0, width, height);
      };
      image.src = dataURL;
    };
  }
};
export const downloadFromPng = (files, type, setSuccess) => {
  for (const file in Object.entries(files)) {
    let format = type === "svg+xml" ? "svg" : type;
    var tag = document.getElementById("downloader");
    tag.download = files[file].name.split(".")[0] + "." + format;
    type = type === "svg" ? "svg+xml" : type;
    let id = "canvas " + file;
    console.log(id, file);
    let dataURI = document.getElementById(id).toDataURL("image/" + type, 0.9);
    let byteString = atob(dataURI.split(",")[1]);
    // write the bytes of the string to an ArrayBuffer
    let arrayBuffer = new ArrayBuffer(byteString.length);
    let _ia = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      _ia[i] = byteString.charCodeAt(i);
    }

    let dataView = new DataView(arrayBuffer);
    let blob = new Blob([dataView], { type: "image/" + type });
    tag.href = URL.createObjectURL(blob);
    tag.click();
    tag.href = "";
  }
  setSuccess(false);
};
