import React from "react";
import HeaderCSS from "./header.module.scss";
export default function Header() {
  return (
    <div className="card">
      <h1>Main title</h1>
      <button className={HeaderCSS.btn}>Buy now</button>
    </div>
  );
}
