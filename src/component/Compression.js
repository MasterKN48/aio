import React, { useState } from "react";

const Compression = () => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [load, setLoading] = useState(false);
  const showName = e => {
    setFile(e.target.files[0]);
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

    setSuccess(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 5000);
  };
  return (
    <section className="container">
      <div className="level is-mobile">
        <div className="level-item has-text-centered">
          <div className="field">
            <div className="control has-icons-left">
              <div className="select is-rounded">
                <select name="from">
                  <option defaultValue>Original File Types</option>
                  <option>PDF</option>
                  <option>PNG</option>
                  <option>JPG</option>
                  <option>JPEG</option>
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

      <div className="has-centered">
        {success ? (
          <div className="has-centered">
            <div className="container level-item has-centered">
              <p>Your converted file is ready to download!</p>
              <p>File Size: 32kb</p>
            </div>
            <div className="container level-item has-centered">
              <button className="button is-dark is-outlined">
                <span className="icon is-small">
                  <i className="fas fa-download"></i>
                </span>
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <hr />
    </section>
  );
};

export default Compression;
