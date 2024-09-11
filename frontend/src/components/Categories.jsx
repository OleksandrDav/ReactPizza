import React, { useState } from "react";

const Categories = () => {
  const [activeItem, setActiveItem] = useState(0);

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
        {categories.map((item, index) => (
          <li
            className={activeItem === index ? "active" : ""}
            onClick={() => setActiveItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
