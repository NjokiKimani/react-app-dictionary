import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./App.css";
import useMediaQuery from "./MediaQuery";

export default function App() {
  let [word, setWord] = useState("grace");
  let [wordData, setWordData] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setWordData(response.data[0]);
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
    handlePhotos();
  }
async function handlePhotos() {

  const pexelsApiKey = "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";

  const data = await fetch(
    `https://api.pexels.com/v1/search?query=${word}&per_page=6`,
    {
      method: "GET",
      headers: {
        Authorization: pexelsApiKey, //use the apikey you have generated
      },
    }
  );
  const response = await data.json(); //convert the response to json
  setPhotos(response);

}

  if (loaded) {
    return (
      <div className="container">
        <div className="header">
          <h1>Dictionary</h1>
          <div className="searchForm">
            <form onSubmit={handleSubmit}>
              <input
                type={"search"}
                className="searchInput"
                autoFocus="on"
                onChange={handleChange}
              />
            </form>
          </div>
          <Results data={wordData} />
        </div>
        <div className="footer">
          <Photos data={photos} />
        </div>
      </div>
    );
  } else {
    setLoaded(true);
    search();
    return "loading";
  }
}

