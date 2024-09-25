import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryId, setCategoryId } from "../redux/slices/filterSlice";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const dispatch = useDispatch();
  const categoryId = useSelector(selectCategoryId);

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={categoryName}
            className={categoryId === index ? "active" : ""}
            onClick={() => dispatch(setCategoryId(index))}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
