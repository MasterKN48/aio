export const doc_to_other = file => {
  console.log("object");
};
export const download_doc_to_pdf = (file, setSuccess) => {
  var mammoth = require("mammoth");
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = () => {
    let arrayBuffer = reader.result;
    mammoth
      .convertToHtml({ arrayBuffer: arrayBuffer })
      .then(function(result) {
        var data = result.value;
        var sourceHTML = data;
        console.log(sourceHTML);
        var source =
          "data:application/pdf;charset=utf-8," +
          encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = file.name.split(".")[0] + ".pdf";
        fileDownload.click();
        document.body.removeChild(fileDownload);
        setSuccess(false);
      })
      .done();
  };
};

export const download_doc_to_md = (file, setSuccess) => {
  var mammoth = require("mammoth");
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = () => {
    let arrayBuffer = reader.result;
    mammoth
      .convertToMarkdown({ arrayBuffer: arrayBuffer })
      .then(function(result) {
        var data = result.value;
        var sourceHTML = data;

        var source =
          "data:text/markdown;charset=utf-8," + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = file.name.split(".")[0] + ".md";
        fileDownload.click();
        document.body.removeChild(fileDownload);
        setSuccess(false);
      })
      .done();
  };
};
