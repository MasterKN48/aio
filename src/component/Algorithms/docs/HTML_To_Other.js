/**
 * 1-> Read file as text
 * 2-> create new data file
 * 2.1-> append data:application/vnd.ms-word;charset=utf-8, with text by using
 *       encodeURIComponent(text)
 * 2.2-> for pdf data:application/pdf;charset=utf-8,
 * 2.3-> create element <a></a> and put href as new data to download
 */

export const html_to_other = (file) => {
  console.log("time");
};

export const downloadFromHtml_To_Md = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    let dataURI = reader.result;
    var showdown = require("showdown");
    var converter = new showdown.Converter();
    const md = converter.makeMd(dataURI);
    var source = "data:text/markdown," + encodeURIComponent(md);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = file.name.split(".")[0] + ".md";
    fileDownload.click();
    document.body.removeChild(fileDownload);
    setSuccess(false);
  };
};

export const downloadFromHtml_To_Doc = (file, setSuccess) => {
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
    fileDownload.download = file.name.split(".")[0] + ".docx";
    fileDownload.click();
    document.body.removeChild(fileDownload);
    setSuccess(false);
  };
};

export const downloadFromHtml_To_Pdf = (file, setSuccess) => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    // let dataURI = reader.result;
    var data = reader.result;
    let el = document.createElement("rd");
    el.setAttribute("id", "render");

    el.innerHTML = data;
    // change render view by use docx render then put print on that div
    var mywindow = window.open("", "PRINT", "height=500,width=600");
    mywindow.document.write(el.innerHTML);
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    //mywindow.close();
    setSuccess(false);
  };
};
