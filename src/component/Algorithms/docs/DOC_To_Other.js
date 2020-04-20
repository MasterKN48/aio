export const doc_to_other = (file) => {
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
      .then(function (result) {
        var data = result.value;
        let el = document.createElement("rd");
        el.setAttribute("id", "render");

        el.innerHTML = data;
        // change render view by use docx render then put print on that div
        var mywindow = window.open("", "PRINT", "height=500,width=600");

        mywindow.document.write(
          "<html><head><title>" +
            file.name.split(".")[0] +
            "</title><style>img{display: block;margin: 0 auto;} .container{padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;text-align-justify;}</style>"
        );
        mywindow.document.write("</head><body class='container'>");
        mywindow.document.write(el.innerHTML);
        mywindow.document.write("</body></html>");

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        //mywindow.close();
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
      .then(function (result) {
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

export const download_doc_to_html = (file, setSuccess) => {
  var mammoth = require("mammoth");
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = () => {
    let arrayBuffer = reader.result;
    mammoth
      .convertToHtml({ arrayBuffer: arrayBuffer })
      .then(function (result) {
        var data = result.value;
        var sourceHTML = data;
        var source =
          "data:text/html;charset=utf-8," + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = file.name.split(".")[0] + ".html";
        fileDownload.click();
        document.body.removeChild(fileDownload);
        setSuccess(false);
      })
      .done();
  };
};
