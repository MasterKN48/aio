import { mammoth } from "mammoth";
export const DocxToPdf = file => {
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = () => {
    mammoth
      .convertToHtml({ buffer: reader.result })
      .then(function(result) {
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion
        console.log(html, messages);
      })
      .done();
  };
};
