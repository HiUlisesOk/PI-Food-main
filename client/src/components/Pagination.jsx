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
  page,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(AllRecipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ContainerPagination>
        <ContainerButton onClick={(e) => HandlePagination("B")}>
          {"Back"}
        </ContainerButton>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <PaginationPanel key={number}>
                <ContainerButton
                  isActive={number === page}
                  name={number}
                  onClick={(e) => pagination(number, e)}
                >
                  {number}
                </ContainerButton>
              </PaginationPanel>
            );
          })}
        <ContainerButton onClick={(e) => HandlePagination("N")}>
          {"Next"}
        </ContainerButton>
      </ContainerPagination>
    </>
  );
};

export default Pagination;
