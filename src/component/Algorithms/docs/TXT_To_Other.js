/**
 * 1-> Read file as text
 * 2-> create new data file
 * 2.1-> append data:application/vnd.ms-word;charset=utf-8, with text by using
 *       encodeURIComponent(text)
 * 2.2-> for pdf data:application/pdf;charset=utf-8,
 * 2.3-> create element <a></a> and put href as new data to download
 */
export const txt_to_other = (file) => {
  console.log("time");
};

export const downloadFromTxt_To_Doc = (file, setSuccess) => {
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

export const downloadFromTxt_To_Pdf = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    let el = document.createElement("rd");
    el.setAttribute("id", "render");

    el.innerHTML = dataURI;
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
  };
};

export const downloadFromTxt_To_Md = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    var sourceHTML = dataURI + " \n**By AIO**";
    var source =
      "data:text/markdown;charset=utf-8," + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = file.name.split(".")[0] + ".md";
    fileDownload.click();
    document.body.removeChild(fileDownload);

    setSuccess(false);
  };
};
export const downloadFromTxt_To_Html = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    var sourceHTML = `<!doctype><html><head>
    <meta charset="UTF-8">
    <meta name="description" content="${dataURI.substr(0, 40)}">
    <meta name="keywords" content="${dataURI.substr(0, 20)}">
    <meta name="author" content="AIO">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${dataURI.substr(0, 10)}</title>
    </head><body style="color:#212121;background-color:#fafafa;word-wrap:break-word;margin:10 10 10 10"><div>${dataURI}</div></body></html>`;
    var source =
      "data:text/html;charset=utf-8," + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = file.name.split(".")[0] + ".html";
    fileDownload.click();
    document.body.removeChild(fileDownload);

    setSuccess(false);
  };
};
