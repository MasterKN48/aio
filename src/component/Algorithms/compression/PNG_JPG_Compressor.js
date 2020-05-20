import imageCompression from "browser-image-compression";
export const PNG_JPG_Compressor = (file, setLoading, setSuccess, ratio) => {
  let si = (100 - ratio) / 100;
  var options = {
    maxSizeMB: si,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  //console.log(si);
  imageCompression(file, options)
    .then(function (compressedFile) {
      let blob = compressedFile;
      let reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        let dataURI = reader.result;
        setLoading(false);
        setSuccess(true);
        document.getElementById("size").innerText =
          "File Size: " + (compressedFile.size / 1024).toFixed(2) + "kb";
        document.getElementById("downloader").download = file.name;
        document.getElementById("downloader").href = dataURI;
      };
    })
    .catch(function (error) {
      console.log(error.message);
    });
};
