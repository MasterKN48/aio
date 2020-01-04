import jsPDF from "jspdf";
export const HtmlToPdf = file => {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = () => {
    var doc = new jsPDF();
    doc.setFontType("normal");
    doc.setFontSize("14");
    doc.text(reader.result, 10, 10);
    doc.save(file.name + ".pdf");
  };
};
