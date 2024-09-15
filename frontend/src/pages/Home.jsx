import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

import { useFetching } from "../hooks/useFetching";
import PizzaService from "../API/PizzaService";
import { SearchContext } from "../context/SearchContext";
import Pagination from "../components/Pagination";

const Home = () => {
  const { categoryId, sortBy } = useSelector((state) => state.filter);

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { searchValue, setSearchValue } = useContext(SearchContext);

  const [fetchPizzas, isPizzasLoading, pizzasError] = useFetching(
    async (categoryId, sortBy, searchValue, currentPage) => {
      const response = await PizzaService.getPizzas(
        categoryId,
        sortBy.sort,
        searchValue,
        currentPage
      );
      setItems(response.data);
    }
  );

  useEffect(() => {
    fetchPizzas(categoryId, sortBy, searchValue, currentPage);
  }, [categoryId, sortBy, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isPizzasLoading
          ? Array(12)
              .fill(0)
              .map((_, index) => <Skeleton key={index} />)
          : items
              //   .filter((obj) =>
              //     obj.title.toLowerCase().includes(searchValue.toLowerCase())
              //   )
              .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
      <Pagination setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
