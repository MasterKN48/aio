import React, { useState } from "react";
// import { JPGCompressor, downloadJPG } from "./Algorithms/JPGCompressor";
// import { PNGCompressor, downloadPNG } from "./Algorithms/PNGCompressor";
import {
  downloadWEBP,
  WEBPCompressor,
} from "./Algorithms/compression/WEBPCompressor";
import {
  PDFCompressor,
  downloadPDF,
} from "./Algorithms/compression/PDFCompressor";
import { PNG_JPG_Compressor } from "./Algorithms/compression/PNG_JPG_Compressor";
const Compression = () => {
  const [file, setFile] = useState(null);
  const [ratio, setRatio] = useState(50);
  const [success, setSuccess] = useState(false);
  const [load, setLoading] = useState(false);
  const [type, setType] = useState({
    from: "",
  });
  const showName = (e) => {
    setFile(e.target.files[0]);
  };
  const fileType = (e) => {
    //console.log(e.target.value);
    setType({
      ...type,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
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
      if (type.from === "JPEG/JPG") {
        if (
          file.name.split(".").pop() !== "jpg" &&
          file.name.split(".").pop() !== "jpeg"
        ) {
          alert(
            "Mismatch in selected file type: " +
              file.name.split(".").pop() +
              " with 'From' Select box: " +
              type.from.toLowerCase()
          );
          return false;
        }
      } else {
        alert(
          "Mismatch in selected file type: " +
            file.name.split(".").pop() +
            " with 'From' Select box: " +
            type.from.toLowerCase()
        );
        return false;
      }
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
      type.from === "JPEG/JPG" ||
      type.from === "PNG" ||
      type.from === "ICO"
    ) {
      PNG_JPG_Compressor(file, setLoading, setSuccess, ratio);
    }
    if (type.from === "WEBP") {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const dataURL = reader.result;
        WEBPCompressor(dataURL, setLoading, setSuccess);
      };
    }
    if (type.from === "PDF") {
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function () {
        const dataURL = reader.result;
        PDFCompressor(dataURL);
        setSuccess(true);
        setLoading(false);
      };
    }
  };
  //handle download accordingly
  const download = () => {
    if (type.from === "WEBP") {
      downloadWEBP(file.name.split(".")[0], setSuccess, ratio); //passing file name
    }
    if (type.from === "PDF") {
      downloadPDF(file.name.split(".")[0], setSuccess); //passing file name
    }
  };
  const handelRatio = (e) => {
    setRatio(Number(e.target.value));
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
                  {/* <option>PDF</option> */}
                  <option>PNG</option>
                  <option>JPEG/JPG</option>
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
      <div className="level is-mobile">
        <div className="level-item has-centered">
          <h6>Compression Ratio: {ratio}%</h6>
        </div>
      </div>
      <div className="level is-mobile">
        <div className="level-item has-centered">
          <input
            className="slider"
            step="1"
            id="ratio"
            min="0"
            max="99"
            onChange={handelRatio}
            value={ratio}
            type="range"
          />
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
