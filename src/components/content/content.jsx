import React from "react";
import ContentCSS from "./content.module.scss";
export default function Content() {
  return (
    <div className="card">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        nihil minima quis et possimus culpa maiores suscipit nemo esse dolorum.
      </p>
      <button className={ContentCSS.btn}>Read More</button>
    </div>
  );
}
