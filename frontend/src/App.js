import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";

import { useFetching } from "./hooks/useFetching";
import PizzaService from "./API/PizzaService";

import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const [fetchPizzas, isPizzasLoading, pizzasError] = useFetching(async () => {
    const response = await PizzaService.getPizzas();
    setItems([...items, ...response.data]);
  });

  useEffect(() => {
    fetchPizzas();
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isPizzasLoading
                ? Array(12)
                  .fill(0)
                  .map((_, index) => <Skeleton key={index} />)
                : items.map((pizza) => (
                  <PizzaBlock
                    key={pizza.id}
                    {...pizza}
                  />
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
