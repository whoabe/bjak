import React from "react";

const MovieDetailsInfo = ({ movieData }) => {
  //   console.log({ movieData });
  function convertHMS(value) {
    const ms = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(ms / 3600000); // get hours
    let minutes = Math.floor((ms - hours * 3600000) / 60000); // get minutes
    let seconds = ms - hours * 3600000 - minutes * 60000; //  get seconds
    // add 0 if value < 10
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds / 1000; // Return is HH : MM : SS
  }

  return (
    <section className="movie_details_info">
      {movieData.data.data.images.map(image => {
        if (image.type === "POSTER")
          return <img src={image.url} alt={image.id} key={image.id} />;
      })}
      <div>
        <strong>{movieData.data.data.title}</strong> <span> | </span>
        {movieData.data.data.meta.releaseYear}
      </div>
      <p>{movieData.data.data.short_description}</p>
      <div>
        <strong>Age Rating: </strong>
        {movieData.data.data.meta.ageRating}
      </div>
      <div>
        <strong>Running Time: </strong>
        {convertHMS(movieData.data.data.running_time)}
      </div>
      <div>
        <strong>Expires On: </strong>
        {movieData.data.data.expires_on}
      </div>
      <div>
        {movieData.data.data.people.map(person => {
          if (person.role === "DIRECTOR")
            return <div key={person.name}>Director: {person.name}</div>;
        })}
      </div>
      <div>
        {movieData.data.data.people.map(person => {
          if (person.role === "CAST")
            return <div key={person.name}>CAST: {person.name}</div>;
        })}
      </div>
    </section>
  );
};

export default MovieDetailsInfo;
