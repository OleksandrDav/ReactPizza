import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

import PizzaService from "../API/PizzaService";
import Pagination from "../components/Pagination";
import { SearchContext } from "../context/SearchContext";
import { useFetching } from "../hooks/useFetching";

const Home = () => {
  const { categoryId, pageCount, sortBy } = useSelector((state) => state.filter);
  console.log(categoryId, pageCount, sortBy);
  console.log(useSelector((state) => state.filter));

  const [items, setItems] = useState([]);

  const { searchValue, setSearchValue } = useContext(SearchContext);

  const [fetchPizzas, isPizzasLoading, pizzasError] = useFetching(
    async (categoryId, sortBy, searchValue, pageCount) => {
      const response = await PizzaService.getPizzas(
        categoryId,
        sortBy.sort,
        searchValue,
        pageCount
      );
      setItems(response.data);
    }
  );

  useEffect(() => {
    fetchPizzas(categoryId, sortBy, searchValue, pageCount);
  }, [categoryId, sortBy, searchValue, pageCount]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isPizzasLoading ? (
          Array(12)
            .fill(0)
            .map((_, index) => <Skeleton key={index} />)
        ) : pizzasError ? ( // Check for pizzasError
          <p>{pizzasError}</p> // Display the error message
        ) : (
          items
            //   .filter((obj) =>
            //     obj.title.toLowerCase().includes(searchValue.toLowerCase())
            //   )
            .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
