import React from "react";
const Description = (props) => {
  return (
    <>
      <h3>
        {props.title} {props.year}
      </h3>
      <p>{props.japanesetitle}</p>
      <p>
        {props.rating} {props.type}
      </p>
      <p>{props.duration}</p>
      <img src={props.image} alt="" />
      {props.trailer ? (
        <iframe
          width="560"
          height="315"
          src={props.trailer}
          title="YouTube video player"
        ></iframe>
      ) : (
        <h1>No trailer found</h1>
      )}
      <h2>{props.episodes} episodes</h2>
      {props.description ? (
        <p>{props.description}</p>
      ) : (
        <p>
          Anime is a form of Japanese animation whose origins go back before the
          1920s. Later, before and during World War II, many organizations for
          artists and cartoonists were established.The term anime [a·nuh·mei] is
          a Japanese colloquialism used as an abbreviation for the term
          “animation.” Generally in Japan, the word anime (written アニメ) is
          synonymous with animation of any kind from anywhere. Internationally,
          however, anime is typically referred to as animation that is produced
          from Japan
        </p>
      )}
    </>
  );
};

export default Description;
