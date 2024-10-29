import React, { useEffect } from "react";
import "../scss/fullPizza.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFullPizza,
  selectFullPizza,
} from "../redux/slices/fullPizzaSlice";
import Skeleton from "../components/PizzaBlock/Skeleton";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pizza, status, error } = useSelector(selectFullPizza);

  useEffect(() => {
    dispatch(fetchFullPizza(id));
  }, [id]);

  if (status === "loading") {
    return (
      <div className="full-pizza">
        <Skeleton />
      </div>
    );
  }

  if (status === "failed") {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="full-pizza">
      <img src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <p>
        Compound:
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo
        sunt tempore, sequi libero, odit quos nam vero omnis voluptatum
        dignissimos quas asperiores voluptatibus nulla aliquam saepe deleniti
        eaque. Quas?
      </p>
      <h4>Price: {pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
