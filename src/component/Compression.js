import React, { useState } from "react";
// import { JPGCompressor, downloadJPG } from "./Algorithms/JPGCompressor";
// import { PNGCompressor, downloadPNG } from "./Algorithms/PNGCompressor";
import { downloadWEBP, WEBPCompressor } from "./Algorithms/WEBPCompressor";
import { PDFCompressor, downloadPDF } from "./Algorithms/PDFCompressor";
import { PNG_JPG_Compressor } from "./Algorithms/PNG_JPG_Compressor";
const Compression = () => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [load, setLoading] = useState(false);
  const [type, setType] = useState({
    from: ""
  });
  const showName = e => {
    setFile(e.target.files[0]);
  };
  const fileType = e => {
    //console.log(e.target.value);
    setType({
      ...type,
      [e.target.name]: e.target.value
    });
  };
  const submit = e => {
    e.preventDefault();
    if (file === null) {
      alert("Please first select file and types");
      return;
    }
    if (file.size > 112582912) {
      alert("File Size must be less then 11mb.");
      return;
    }
    if (type.from === "" || type.from === "Original File Types") {
      alert("'From' file type is not selected!");
      return;
    }
    if (type.from.toLowerCase() !== file.name.split(".").pop()) {
      alert(
        "Mismatch in selected file type: " +
          file.name.split(".").pop() +
          " with 'From' Select box: " +
          type.from.toLowerCase()
      );
      return false;
    }
    setSuccess(false);
    setLoading(true);
    // if (type.from === "JPG" || type.from === "JPEG") {
    //   let reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = function() {
    //     const dataURL = reader.result;
    //     JPGCompressor(dataURL);
    //   };
    // }
    if (
      type.from === "JPG" ||
      type.from === "JPEG" ||
      type.from === "PNG" ||
      type.from === "ICO"
    ) {
      PNG_JPG_Compressor(file, setLoading, setSuccess);
    }
    if (type.from === "WEBP") {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        const dataURL = reader.result;
        WEBPCompressor(dataURL);
      };
    }
    if (type.from === "PDF") {
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function() {
        const dataURL = reader.result;
        PDFCompressor(dataURL);
      };
    }
  };
  //handle download accordingly
  const download = () => {
    if (type.from === "WEBP") {
      downloadWEBP(file.name.split(".")[0]); //passing file name
    }
    if (type.from === "PDF") {
      downloadPDF(file.name.split(".")[0]); //passing file name
    }
  };
  return (
    <section className="container">
      <div className="level is-mobile">
        <div className="level-item has-text-centered">
          <div className="field">
            <div className="control has-icons-left">
              <div className="select is-rounded">
                <select name="from" onChange={fileType}>
                  <option defaultValue>Original File Types</option>
                  <option>PDF</option>
                  <option>PNG</option>
                  <option>JPG</option>
                  <option>JPEG</option>
                  <option>WEBP</option>
                  <option>ICO</option>
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="fas fa-globe"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ color: "red" }}>
        *All Compression algo working except pdf compression*
      </p>
      <div className="level is-mobile">
        <div className="level-item has-text-centered">
          <div className="file is-dark has-name is-boxed">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="image"
                accept="image/*"
                onChange={showName}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">
                {file === null ? null : file.name}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="level has-centered">
        {load ? (
          <div className="columns level-item has-centered">
            <div className="column is-two-thirds">
              <progress className="progress is-dark" max="100">
                30%
              </progress>
            </div>
          </div>
        ) : (
          <div className="level-item has-centered">
            <button className="button is-dark is-rounded" onClick={submit}>
              <span className="icon">
                <i className="fas fa-dice-d20"></i>
              </span>
              <span>Convert</span>
            </button>
          </div>
        )}
      </div>
      <canvas
        className="container has-centered"
        id="jpgtopng"
        style={{ display: "none" }}
      ></canvas>
      <div className="has-centered">
        {success ? (
          <div className="has-centered">
            <div className="container level-item has-centered">
              <p>Your converted file is ready to download!</p>
            </div>
            <div className="container level-item has-centered">
              <p id="size"></p>
            </div>
            <br />
            <div className="container level-item has-centered">
              <a
                onClick={download}
                id="downloader"
                href="#i"
                className="button is-dark is-outlined"
              >
                <span className="icon is-small">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </div>
        ) : null}
      </div>
      <hr />
    </section>
  );
};

export default Compression;
