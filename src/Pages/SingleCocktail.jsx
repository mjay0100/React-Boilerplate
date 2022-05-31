import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
    } catch (error) {
      console.log(error);
      setLoading(flase);
    }
  };

  useEffect(() => {
    getCocktail();
  }, [id]);

  if (!cocktail) {
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className=" w-[70vw] mx-auto mt-[2rem] rounded-lg">
        <h2 className="text-center mb-[2rem] text-2xl font-bold">{name}</h2>
        <div className="drink flex gap-[2rem]">
          <img
            src={image}
            className="object-cover rounded-lg w-[40%] h-[50%]"
            alt={name}
          ></img>
          <div className="drink-info">
            <p className="py-3 capitalize">
              <span>name :</span> {name}
            </p>
            <p className="py-3 capitalize">
              <span className="font-semibold bg-slate-500 p-1 rounded-md mr-2">
                category :
              </span>
              {category}
            </p>
            <p className="py-3 capitalize">
              <span className="font-semibold bg-slate-500 p-1 rounded-md mr-2">
                info :
              </span>
              {info}
            </p>
            <p className="py-3 capitalize">
              <span className="font-semibold bg-slate-500 p-1 rounded-md mr-2">
                glass :
              </span>
              {glass}
            </p>
            <p className="py-3 capitalize">
              <span className="font-semibold bg-slate-500 p-1 rounded-md mr-2">
                instructons :
              </span>
              {instructions}
            </p>
            <p className="py-3 capitalize">
              <span className="font-semibold bg-slate-500 p-1 rounded-md mr-2">
                ingredients :
              </span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null;
              })}
            </p>
          </div>
        </div>
        <Link
          to="/"
          className="p-2 bg-slate-500 block mx-auto w-fit mt-[1.7rem] rounded-md  text-center hover:bg-slate-600"
        >
          back home
        </Link>
      </section>
    );
  }
};

export default SingleCocktail;
