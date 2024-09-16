import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort, { sortOptions } from "../components/Sort";

import { useSearchParams } from "react-router-dom";
import PizzaService from "../API/PizzaService";
import Pagination from "../components/Pagination";
import { SearchContext } from "../context/SearchContext";
import { useFetching } from "../hooks/useFetching";
import { setFilters } from "../redux/slices/filterSlice";

const Home = () => {
  const isSearch = React.useRef(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { categoryId, pageCount, sortBy } = useSelector(
    (state) => state.filter
  );

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

  // для того, чтобы при при первом рендере проверять URL
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

  // Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas(categoryId, sortBy, searchValue, pageCount);
    }
    isSearch.current = false;
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
