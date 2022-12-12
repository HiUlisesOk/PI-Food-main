import React from "react";
import {
  ContainerPagination,
  PaginationPanel,
  ContainerButton,
} from "./styles";
const Pagination = ({
  recipesPerPage,
  AllRecipes,
  pagination,
  HandlePagination,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(AllRecipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ContainerPagination>
        <button onClick={(e) => HandlePagination("B")}>{"Back"}</button>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <PaginationPanel key={number}>
                <ContainerButton onClick={() => pagination(number)}>
                  {number}
                </ContainerButton>
              </PaginationPanel>
            );
          })}
        <button onClick={(e) => HandlePagination("N")}>{"Next"}</button>
      </ContainerPagination>
    </>
  );
};

export default Pagination;
