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
        <ContainerButton
          isActive={page > 1}
          onClick={(e) => HandlePagination("B")}
        >
          {"Back"}
        </ContainerButton>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <PaginationPanel key={number}>
                <ContainerButton
                  isActive={number === page}
                  name={number}
                  onClick={() => pagination(number)}
                >
                  {number}
                </ContainerButton>
              </PaginationPanel>
            );
          })}
        <ContainerButton
          isActive={page < Math.ceil(AllRecipes.length / recipesPerPage)}
          onClick={(e) => HandlePagination("N")}
        >
          {"Next"}
        </ContainerButton>
      </ContainerPagination>
    </>
  );
};

export default Pagination;
