import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Categories from "../components/Categories";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Pagination from "../components/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort, { sortOptions } from "../components/Sort";
import { selectFilters, setFilters } from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizza } from "../redux/slices/pizzaSlice";

const Home = () => {
  const isSearch = React.useRef(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const { items, status, error } = useSelector(selectPizza);

  const dispatch = useDispatch();

  const { categoryId, pageCount, sortBy, searchValue } = useSelector(selectFilters);

  // Update URL when filters change
  // Если изменили параметры поиска, то обновляем URL
  useEffect(() => {
    if (!initialLoad) {
      setSearchParams({
        sortBy: sortBy.sort,
        categoryId,
        pageCount,
      });
    }
    setInitialLoad(false);
  }, [categoryId, sortBy.sort, pageCount]);

  // On first render, load filters from URL and set state
  // Для того, чтобы при при первом рендере проверять URL и устанавливать фильтры
  useEffect(() => {
    if (window.location.search) {
      const categoryId = searchParams.get("categoryId");
      const sortBy = searchParams.get("sortBy");
      const pageCount = searchParams.get("pageCount");

      const sort = sortOptions.find((obj) => obj.sort === sortBy);

      dispatch(
        setFilters({
          categoryId: categoryId,
          pageCount: pageCount,
          sortBy: sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  // Fetch pizzas on first render or when filters change
  // Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    if (!isSearch.current) {
      dispatch(
        fetchPizzas({
          categoryId,
          sortBy,
          searchValue,
          pageCount,
        })
      );
    }
    isSearch.current = false;
  }, [categoryId, sortBy, searchValue, pageCount, dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>

      {error && <ErrorMessage message={error} />}

      <div className="content__items">
        {status === "loading"
          ? Array(12)
              .fill(0)
              .map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>

      <Pagination />
    </div>
  );
};

export default Home;
