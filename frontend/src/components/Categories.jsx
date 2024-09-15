import React, { useState } from "react";

const Categories = ({category, setCategory}) => {

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={categoryName}
            className={category === index ? "active" : ""}
            onClick={() => setCategory(index)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
