import React from "react";

const Footer = () => {
  return (
    <footer className="footer container hero is-dark is-bold">
      <div className="content has-text-centered">
        <p>
          <strong style={{ color: "white" }}>AIO (All in one)</strong> by{" "}
          <a href="https://masterkn.tech">MasterKN48</a>.
          <br />
          The source code is available <a href="#bulma">Github</a>. <br />
          The website use <a href="https://bulma.io/">Bulma CSS</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
