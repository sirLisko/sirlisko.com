import React from "react";

const Contacts = () => (
  <article className="section contacts">
    <h1>Contacts</h1>
    <p>
      My website <a href="https://sirlisko.com">https://sirlisko.com</a>
    </p>
    <p>
      My Github{" "}
      <a href="https://github.com/sirlisko">https://github.com/sirlisko</a>
    </p>
    <p>
      My email address <a href="mailto:luca@sirlisko.com">luca@sirlisko.com</a>.
    </p>
    <p className="alt--invisible">
      A print-friendly version of this:{" "}
      <a href="https://sirlisko.com/cv/alt.pdf">
        https://sirlisko.com/cv/alt.pdf
      </a>
    </p>
    <p className="alt--visible">
      A live version of this resume:{" "}
      <a href="https://sirlisko.com/resume">https://sirlisko.com/resume</a>
    </p>
  </article>
);

export default Contacts;