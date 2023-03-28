import React from "react";

export default function Synonym({ data }) {
  if (data) {
    return data.map(function (synonym, index) {
      return (
        <span className="synonym" key={index}>
          {synonym}
        </span>
      );
    });
  } else {
    return null;
  }
}
