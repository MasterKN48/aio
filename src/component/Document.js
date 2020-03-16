import React, { useState } from "react";
import { PDF_To_Other } from "./Algorithms/docs/PDF_To_Other";
import {
  download_doc_to_pdf,
  doc_to_other,
  download_doc_to_md
} from "./Algorithms/docs/DOC_To_PDF";
import {
  html_to_other,
  downloadFromHtml_To_Doc,
  downloadFromHtml_To_Pdf,
  downloadFromHtml_To_Md
} from "./Algorithms/docs/HTML_To_Other";
import {
  txt_to_other,
  downloadFromTxt_To_Doc,
  downloadFromTxt_To_Pdf,
  downloadFromTxt_To_Md,
  downloadFromTxt_To_Html
} from "./Algorithms/docs/TXT_To_Other";

import {
  downloadMd_to_Pdf,
  downloadMd_to_Html,
  downloadMd_to_Docx
} from "./Algorithms/docs/MD_To_Other";

const Document = () => {
  // eslint-disable-next-line
  const [fr, setFr] = useState(["DOCX", "TXT", "HTML", "MD"]); // eslint-disable-next-line
  const [to, setTo] = useState(["PDF", "DOCX", "MD", "HTML"]);
  const [load, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const [type, setType] = useState({
    from: "",
    to: ""
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
    if (type.from === "") {
      console.log(type);
      alert("'From' file type is not selected!");
      return;
    }
    if (type.to === "") {
      alert("'To' file type is not selected");
      return;
    }
    setSuccess(false);
    setLoading(true);
    if (type.from === "PDF") {
      if (type.to === "PDF") {
        alert("To and from type is same");
        setLoading(false);
        return;
      }
      PDF_To_Other(file);
      setSuccess(true);
      setLoading(false);
    }
    if (type.from === "DOCX") {
      if (type.to === "DOCX") {
        alert("To and from type is same");
        setLoading(false);
        return;
      }
      //download_doc_to_pdf(file, setSuccess);
      doc_to_other(file, setSuccess);
    }
    if (type.from === "HTML") {
      html_to_other(file);
    }
    if (type.from === "TXT") {
      txt_to_other(file);
    }
    if (type.from === "MD") {
      console.log("time");
    }
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };
  const download = () => {
    if (type.from === "HTML") {
      if (type.to === "DOCX") {
        downloadFromHtml_To_Doc(file, setSuccess);
      }
      if (type.to === "PDF") {
        downloadFromHtml_To_Pdf(file, setSuccess);
      }
      if (type.to === "MD") {
        downloadFromHtml_To_Md(file, setSuccess);
      }
    }
    if (type.from === "TXT") {
      if (type.to === "DOCX") {
        downloadFromTxt_To_Doc(file, setSuccess);
      }
      if (type.to === "PDF") {
        downloadFromTxt_To_Pdf(file, setSuccess);
      }
      if (type.to === "MD") {
        downloadFromTxt_To_Md(file, setSuccess);
      }
      if (type.to === "HTML") {
        downloadFromTxt_To_Html(file, setSuccess);
      }
    }
    if (type.from === "DOCX") {
      if (type.to === "PDF") {
        download_doc_to_pdf(file, setSuccess);
      }
      if (type.to === "MD") {
        download_doc_to_md(file, setSuccess);
      }
    }
    if (type.from === "MD") {
      if (type.to === "PDF") {
        downloadMd_to_Pdf(file, setSuccess);
      }
      if (type.to === "HTML") {
        downloadMd_to_Html(file, setSuccess);
      }
      if (type.to === "DOCX") {
        downloadMd_to_Docx(file, setSuccess);
      }
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
      <p style={{ color: "red" }}>
        *Under Construction:Txt,html to other work fine,rest are under
        development*
      </p>
      <div className="level is-mobile">
        <div className="level-item has-text-centered">
          <div className="file is-dark has-name is-boxed">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="image"
                accept="*.docx,*.pdf,*.html,*.txt,*.ppt"
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
            </div>
            <br />
            <div className="container level-item has-centered">
              <button
                className="button is-dark is-outlined"
                id="dl"
                onClick={download}
              >
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
