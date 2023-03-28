import React from "react";
import speaker from "./speaker.svg";

export default function Phonetics({ data }) {
  return data.map(function (phonetic, index) {
    return (
      <div key={index}>
        <span className="pronunciation">{phonetic.text}</span>
        <a href={phonetic.audio} target="_blank" rel="noreferrer">
          <img src={speaker} className="speaker" alt="" />
        </a>
      </div>
    );
  });
}
