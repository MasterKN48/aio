export const html_to_other = file => {
  console.log("time");
};

export const downloadFromHtml = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    var sourceHTML = dataURI + "   <>By AIO </>";
    var source =
      "data:application/vnd.ms-word;charset=utf-8," +
      encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = file.name.split(".")[0] + ".doc";
    fileDownload.click();
    document.body.removeChild(fileDownload);

    setSuccess(false);
  };
};

export const downloadFromHtml_To_Pdf = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    var sourceHTML = dataURI + "   <>By AIO </>";
    var source =
      "data:application/pdf;charset=utf-8," + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = file.name.split(".")[0] + ".pdf";
    fileDownload.click();
    document.body.removeChild(fileDownload);

    setSuccess(false);
  };
};
