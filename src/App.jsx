import { useEffect, useState } from "react";

function App() {
  const [meal, setMeal] = useState([]);
  const [first, setFirst] = useState(false);

  const API = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    if (first) {
      handleSubmit();
    }
  }, [first]);

  const handleSubmit = () => {
    setFirst(true);
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setMeal(data);
      });
  };

  return (
    <>
      <div className="header-container">
        <h1>Une petite faim ?</h1>
        <h2>Choppe une recette au hasard en cliquant juste ici</h2>
        <button onClick={handleSubmit}>Choppe une recette 🍔 </button>
      </div>

      {meal?.meals && (
        <>
          <div className="container-recipe">
            <div className="row-1">
              <img src={meal.meals[0].strMealThumb} alt="" />
              <p>
                <strong>Catégorie:</strong> {meal.meals[0].strCategory}
              </p>
              <p>
                <strong>Origine:</strong> {meal.meals[0].strArea}
              </p>
              {meal.meals[0].strTags && (
                <p>
                  <strong>Tags:</strong> {meal.meals[0].strTags}
                </p>
              )}
              <h3>Ingrédients :</h3>
              <ul>
                {}
                <li>
                  {meal.meals[0].strIngredient1 +
                    " " +
                    meal.meals[0]?.strMeasure1}
                </li>
                <li>
                  {meal.meals[0].strIngredient2 +
                    " " +
                    meal.meals[0]?.strMeasure2}
                </li>
                <li>
                  {meal.meals[0].strIngredient3 +
                    " " +
                    meal.meals[0]?.strMeasure3}
                </li>
                <li>
                  {meal.meals[0].strIngredient4 +
                    " " +
                    meal.meals[0]?.strMeasure4}
                </li>
                <li>
                  {meal.meals[0].strIngredient5 +
                    " " +
                    meal.meals[0]?.strMeasure5}
                </li>
                <li>
                  {meal.meals[0].strIngredient6 +
                    " " +
                    meal.meals[0]?.strMeasure6}
                </li>
                <li>
                  {meal.meals[0].strIngredient7 +
                    " " +
                    meal.meals[0]?.strMeasure7}
                </li>
                <li>
                  {meal.meals[0].strIngredient8 +
                    " " +
                    meal.meals[0]?.strMeasure8}
                </li>
                <li>
                  {meal.meals[0].strIngredient9 +
                    " " +
                    meal.meals[0]?.strMeasure9}
                </li>
                <li>
                  {meal.meals[0].strIngredient10 +
                    " " +
                    meal.meals[0]?.strMeasure10}
                </li>
              </ul>
            </div>

            <div className="row-2">
              <h2>{meal.meals[0].strMeal}</h2>
              <p>{meal.meals[0].strInstructions}</p>
            </div>
          </div>

          <div className="video-container">
            <h3>Recette en vidéo</h3>
            <div className="iframe-video">
              <iframe src={meal.meals[0].strYoutube}></iframe>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
