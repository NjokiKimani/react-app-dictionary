import React from "react";


export default function Photos({data}) {
  if (data) {
    return (
        <div className="row">
          {data.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid photo"
                    alt={photo.src.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      
    );
  } else {
    return null;
  }};