import React from "react";
import "./newsCard.css";

// title, description, date
// const {article} = props;
// const NewsCard = (props) => {
const NewsCard = ({ article }) => {
  return (
    <div className="newsCardContainer">
      {/* <h1>{props.title}</h1> */}
      <h1>{article.title}</h1>

      {/* {article.lajkovi > 15 ? (
        <h1 style={{ color: "green" }}>Uspesna vest</h1>
      ) : (
        <h1 style={{ color: "red" }}>Ne prolazi</h1>
      )} */}

      <h1
        style={
          article.lajkovi > 15
            ? { color: "green", fontSize: 50 }
            : { color: "red", fontSize: 10 }
        }
      >
        {/* <h1 style={{ color: article.lajkovi > 15 ? "green" : "red" }}> */}
        {article.lajkovi > 15 ? "Uspesna vest" : "Ne Prolazi"}
      </h1>

      {article.lajkovi > 15 && (
        <h1 style={{ color: "red", fontSize: 8, fontWeight: 900 }}>
          Uspesna vest
        </h1>
      )}

      <p>{article.lajkovi}</p>

      {/* <h5 className="description">{props.description}</h5> */}
      <h5 className="description">{article.description}</h5>

      {/* <p>{props.date}</p> */}
      <p>{article.date}</p>
    </div>
  );
};

export default NewsCard;
