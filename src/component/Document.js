import React, { useState } from "react";

const Document = () => {
  const [load, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const showName = e => {
    console.log(e.target.files[0]);
    setName(e.target.files[0].name);
  };
  const submit = e => {
    e.preventDefault();
    setLoading(true);
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
                  <select>
                    <option defaultValue>Original File Types</option>
                    <option>PDF</option>
                    <option>DOCS</option>
                    <option>PPT</option>
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
                <select>
                  <option defaultValue>New File Types</option>
                  <option>PDF</option>
                  <option>DOCS</option>
                  <option>PPT</option>
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
                name="docs"
                accept=".doc, .docx,.ppt, .pptx,.txt,.pdf"
                onChange={showName}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">{name}</span>
            </label>
          </div>
        </div>
      </div>
      <div className="level">
        {load ? (
          <div className="level-item has-centered">
            <progress className="progress is-dark" max="100">
              30%
            </progress>
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
              <p>Your convert file is ready to download!</p>
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
      <br />
    </section>
  );
};

export default Document;
