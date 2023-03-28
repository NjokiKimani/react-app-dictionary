import React from "react";

export default function Example({ example }) {
  if (example) {
    return <li className="example">"{example}"</li>;
  }
}
