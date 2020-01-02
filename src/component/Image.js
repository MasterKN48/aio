import React, { useState } from "react";

const Image = () => {
  const [name, setName] = useState("");
  const showName = e => {
    setName(e.target.files[0].name);
  };
  return (
    <section className="container">
      <nav className="level is-mobile">
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
              <span className="file-name">{name}</span>
            </label>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Following</p>
            <p className="title">123</p>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Image;
