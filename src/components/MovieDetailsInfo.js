import React from "react";
import convertHMS from "../helpers/convertHMS";

const MovieDetailsInfo = ({ movieData }) => {
  const info = movieData.data.data;
  console.log({ info });

  const poster = info.images.filter(image => {
    return image.type === "POSTER";
  });

  const cast = info.people.filter(c => {
    return c.role === "CAST";
  });

  const director = info.people.filter(c => {
    return c.role === "DIRECTOR";
  });

  const audios = info.audios;

  const languages = info.languages;

  return (
    <section className="movie_details_info">
      <img src={poster[0].url} alt={poster[0].id} />
      <div className="details-text-container">
        <div>
          <h2>
            {info.title} <span> | </span>
            {info.meta.releaseYear}
          </h2>
          <strong>{info.as}</strong>{" "}
          {info.as === "TVSHOW" && info.seasons.length === 1 ? (
            <strong>| {info.seasons.length} Season</strong>
          ) : info.as === "TVSHOW" && info.seasons.length > 1 ? (
            <strong>| {info.seasons.length} Seasons</strong>
          ) : null}
        </div>

        <div>
          <i className="fa fa-volume-up"></i>
          {audios.map(function(audio, index) {
            return <span key={`${index}`}>{(index ? ", " : "") + audio}</span>;
          })}
        </div>

        <div>
          <i className="fa fa-cc"></i>
          {languages &&
            languages.map(function(language, index) {
              return (
                <span key={`${index}`}>{(index ? ", " : "") + language}</span>
              );
            })}
        </div>

        <p>{info.description}</p>

        <div>
          <strong>Age Rating: </strong>
          {info.meta.ageRating}
        </div>

        {info.running_time ? (
          <div>
            <strong>Running Time: </strong>
            {convertHMS(info.running_time)}
          </div>
        ) : null}

        <div>
          <strong>Expires On: </strong>
          {info.expires_on.slice(0, 10)}
        </div>

        <div>
          {" "}
          <strong>Director: </strong>
          {director.map(function(d, index) {
            return <span key={`${index}`}>{(index ? ", " : "") + d.name}</span>;
          })}
        </div>

        <div>
          {" "}
          <strong>Cast: </strong>
          {cast.map(function(c, index) {
            return <span key={`${index}`}>{(index ? ", " : "") + c.name}</span>;
          })}
        </div>

        <div>
          {" "}
          <strong>Tags: </strong>
          {info.tags.map(function(t, index) {
            return <span key={`${index}`}>{(index ? ", " : "") + t.tag}</span>;
          })}
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsInfo;
