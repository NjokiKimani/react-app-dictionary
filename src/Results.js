import React from "react";
import Synonym from "./Synonym";
import Example from "./Example";
import Phonetics from "./Phonetics";

export default function Results({ data }) {
  if (data) {
    return (
      <div>
        <h3>{data.word}</h3>
        <Phonetics data={data.phonetics} />
        {data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h5 className="partOfSpeech">{meaning.partOfSpeech}</h5>
              <li className="definition">
                {meaning.definitions[0].definition}
              </li>
              <Example example={meaning.definitions[0].example} />
              <Synonym data={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
