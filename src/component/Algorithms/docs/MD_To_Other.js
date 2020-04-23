export const downloadMd_to_Pdf = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    var showdown = require("showdown");
    var converter = new showdown.Converter();
    const html = converter.makeHtml(dataURI);
    //console.log(html);
    let el = document.createElement("rd");
    el.setAttribute("id", "render");

    el.innerHTML = html;
    // change render view by use docx render then put print on that div
    var mywindow = window.open("", "PRINT", "height=500,width=600");
    mywindow.document.write(el.innerHTML);
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    //mywindow.close(
    setSuccess(true);
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
    fileDownload.download = file.name.split(".")[0] + ".html";
    fileDownload.click();
    document.body.removeChild(fileDownload);
    setSuccess(false);
  };
};

export const downloadMd_to_Docx = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    var sourceHTML = dataURI;
    var source =
      "data:application/vnd.ms-word;charset=utf-8," +
      encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = file.name.split(".")[0] + ".docx";
    fileDownload.click();
    document.body.removeChild(fileDownload);
    setSuccess(false);
  };
};
