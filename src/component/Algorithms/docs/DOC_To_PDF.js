export const doc_to_pdf = file => {
  let reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onloadend = () => {
    console.log(reader.result);
  };
};
