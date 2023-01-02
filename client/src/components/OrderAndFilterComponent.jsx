import {
  SelectFilter,
  OptionFilter,
  LabelFilter,
  PanelDividerOF,
} from "./styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OrderAndFilter } from "../redux/actions";

const OrderAndFilterComponent = ({ handlerOrderAndFilter, orderAndFilter }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("El estado cambió, ahora es: ", orderAndFilter);

    if (orderAndFilter.filter === true || orderAndFilter.order === true) {
      dispatch(OrderAndFilter(orderAndFilter));
    }
  }, [orderAndFilter, dispatch]);

  return (
    <>
      <PanelDividerOF>
        <LabelFilter>Order:</LabelFilter>
        <SelectFilter
          name="order"
          value={orderAndFilter.orderType}
          onChange={handlerOrderAndFilter}
        >
          <OptionFilter value="no order">no order</OptionFilter>
          <OptionFilter value="Ascendente">A - Z</OptionFilter>
          <OptionFilter value="Descendente">Z - A</OptionFilter>
          <OptionFilter value="HealthScoreAscendente">
            Health Score - 0 A 100
          </OptionFilter>
          <OptionFilter value="HealthScoreDescendente">
            Health Score - 100 A 0
          </OptionFilter>
        </SelectFilter>
      </PanelDividerOF>
      <PanelDividerOF>
        <LabelFilter>Filter:</LabelFilter>
        <SelectFilter
          value={orderAndFilter.filterType}
          name="filter"
          onChange={handlerOrderAndFilter}
        >
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
      </PanelDividerOF>
    </>
  );
};
export default OrderAndFilterComponent;
