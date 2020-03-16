export const downloadMd_to_Pdf = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    const convertMd = require("convert-md");
    convertMd(dataURI, { type: "pdf" }, (err, output) => {
      if (err) throw err;
      console.log(output);
    });
  };
};

export const downloadMd_to_Html = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    var showdown = require("showdown");
    var converter = new showdown.Converter();
    const html = converter.makeHtml(dataURI);
    var source = "data:text/html;charset=utf-8," + encodeURIComponent(html);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = file.name.split(".")[0] + ".pdf";
    fileDownload.click();
    document.body.removeChild(fileDownload);
    setSuccess(false);
  };
};
