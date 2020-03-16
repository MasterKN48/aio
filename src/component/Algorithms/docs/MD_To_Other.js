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
