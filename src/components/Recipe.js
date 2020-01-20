import React from "react";

const Recipe = ({ title, url, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <a href={url} className="btn btn-dark my-1">
        See recipe
      </a>
      <ol>
        <strong>Ingredients: </strong>
        {ingredients.map((ingredients, id) => (
          <li key={id}>{ingredients.text}</li>
        ))}
      </ol>
      <img className="image" src={image} alt=""></img>
    </div>
  );
};
export default Recipe;
