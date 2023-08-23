import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.magicthegathering.io/v1/cards?pageSize=20&random=true&contains=imageUrl&colors=u",
          { mode: "cors" }
        );

        if (response.status >= 400) {
          console.log("400+ code response");
          throw new Error("server error");
        }
        const data = await response.json();
        setProducts(convertCards(filterBlueOnly(data.cards)));
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return { products, error, loading };
};

const filterBlueOnly = (data) => {
  return data.filter((elem) => elem.colors.length === 1);
};

const convertCards = (data) => {
  /* want to take the returned data and make product objects with 
    { title, price, image }.
    don't really care about any other info, need to generate a price
  */
  return data.map((card) => makeCardObject(card));
};

const makeCardObject = (card) => {
  console.log(card.multiverseid);
  return {
    title: card.name,
    id: card.multiverseid,
    image: card.imageUrl,
    price: Math.ceil((Math.random() * (12 - 0.25) + 0.25) * 100) / 100,
  };
};
