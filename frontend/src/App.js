import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Peperoni" price="500"/>
            <PizzaBlock title="Cheese" price="400"/>
            <PizzaBlock title="Meat" price="600"/>
            <PizzaBlock title="Vegetarian" price="300"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
