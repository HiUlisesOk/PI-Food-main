import { SelectFilter, OptionFilter, LabelFilter } from "./styles";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { OrderAndFilter, GetRecipes } from "../redux/actions";

const OrderAndFilterComponent = ({ handlerOrderAndFilter, orderAndFilter }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("El estado cambió, ahora es: ", orderAndFilter);
    dispatch(OrderAndFilter(orderAndFilter));
  }, [orderAndFilter]);

  return (
    <>
      <LabelFilter>Order:</LabelFilter>
      <SelectFilter name="order" onChange={handlerOrderAndFilter}>
        <OptionFilter value="no order">No order </OptionFilter>
        <OptionFilter value="Ascendente">Alfabetico - Ascendente </OptionFilter>
        <OptionFilter value="Descendente">
          Alfabetico - Descendente
        </OptionFilter>
        <OptionFilter value="HealthScoreAscendente">
          Health Score - Ascendente
        </OptionFilter>
        <OptionFilter value="HealthScoreDescendente">
          Health Score - Descendente
        </OptionFilter>
      </SelectFilter>

      <LabelFilter>Filter:</LabelFilter>
      <SelectFilter name="filter" onChange={handlerOrderAndFilter}>
        <OptionFilter value="no filter">No filter </OptionFilter>
        <OptionFilter value="gluten free">gluten free</OptionFilter>
        <OptionFilter value="ketogenic">ketogenic</OptionFilter>
        <OptionFilter value="vegetarian">vegetarian</OptionFilter>
        <OptionFilter value="lacto ovo vegetarian">
          lacto ovo vegetarian
        </OptionFilter>
        <OptionFilter value="ovo-vegetarian">ovo-vegetarian</OptionFilter>
        <OptionFilter value="vegan">vegan</OptionFilter>
        <OptionFilter value="pescatarian">pescatarian</OptionFilter>
        <OptionFilter value="paleolithic">paleolithic</OptionFilter>
        <OptionFilter value="primal">primal</OptionFilter>
        <OptionFilter value="low fodmap">low fodmap</OptionFilter>
        <OptionFilter value="whole 30">whole 30</OptionFilter>
        <OptionFilter value="dairy free">dairy free</OptionFilter>
      </SelectFilter>
    </>
  );
};
export default OrderAndFilterComponent;
