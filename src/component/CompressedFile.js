import React, { useState } from "react";
import { Zip_To_Tar } from "./Algorithms/compressedFile/Zip_To_Tar";

const CompressedFile = () => {
  // eslint-disable-next-line
  const [fr, setFr] = useState(["ZIP", "TAR"]); // eslint-disable-next-line
  const [to, setTo] = useState(["TAR", "ZIP"]);
  const [load, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const [type, setType] = useState({
    from: "",
    to: ""
  });
  // const [error, setError] = useState("");
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
      return false;
    }
    if (file.size > 912582912) {
      alert("File Size must be less then 11mb.");
      return false;
    }
    if (type.from === "" || type.from === "Original File Types") {
      console.log(type);
      alert("'From' file type is not selected!");
      return false;
    }
    if (type.to === "" || type.to === "New File Types") {
      alert("'To' file type is not selected");
      return false;
    }

    if (type.from === type.to) {
      alert("'From' and 'To' is same!");
      return false;
    }
    setSuccess(false);
    setLoading(true);
    // selecting algorithms accordingly
    if (type.from === "ZIP") {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        const dataURL = reader.result;
        Zip_To_Tar(dataURL);
      };
    }
    // showing loading just for fun
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  //handle download accordingly
  const download = () => {
    if (type.from === "ZIP") {
      //   let s;
      //   if (type.to === "SVG") {
      //     s = "SVG";
      //   } else {
      //     s = type.to;
      //   }
      //downloadFromJpg(file.name.split(".")[0], s.toLowerCase(), setSuccess); //passing file name
    }
  };
  return (
    <section className="container">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">
              <strong>From</strong>
            </p>
          </div>
          <div className="level-item">
            <div className="field">
              <div className="control has-icons-left">
                <div className="select is-rounded">
                  <select name="from" onChange={fileType}>
                    <option defaultValue>Original File Types</option>
                    {fr.map((i, k) => {
                      return <option key={k}>{i}</option>;
                    })}
                  </select>
                </div>
                <div className="icon is-small is-left">
                  <i className="fas fa-globe"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <p className="subtitle is-5">
              <strong>To</strong>
            </p>
          </div>
          <div className="field shift">
            <div className="control has-icons-left">
              <div className="select is-rounded">
                <select name="to" onChange={fileType}>
                  <option defaultValue>New File Types</option>
                  {to.map((i, k) => {
                    return <option key={k}>{i}</option>;
                  })}
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
                name="CompressedFile"
                accept="CompressedFile/*"
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
        id="canvas"
        style={{ display: "none" }}
      ></canvas>
      <div className="has-centered">
        {success ? (
          <div className="has-centered">
            <div className="container level-item has-centered">
              <p>Your converted file is ready to download!</p>
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
      <br />
    </section>
  );
};

export default CompressedFile;
