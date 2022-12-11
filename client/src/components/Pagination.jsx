import { PaginationAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
const Pagination = () => {
  const dispatch = useDispatch();
  const AllRecipes = useSelector((state) => state.AllRecipes);
  const MyPagination = useSelector((state) => state.pagination);
  const [pagination, setpagination] = useState({ limit: 0, offset: 9 });
  const [page, setPage] = useState(0);

  function handleNextPage() {
    if (pagination.limit < AllRecipes.length - 1) {
      setpagination({
        limit: pagination.limit + 9,
        offset: pagination.offset + 9,
      });
      setPage(MyPagination);
    }
  }
  function handleBackPage() {
    if (pagination.limit > 0) {
      setpagination({
        limit: pagination.limit - 9,
        offset: pagination.offset - 9,
      });
      setPage(MyPagination);
    }
  }
  useEffect(() => {
    dispatch(PaginationAction(pagination));
  }, [pagination]);
  return (
    <>
      <button onClick={handleBackPage}>{"Back"}</button>
      <button onClick={handleNextPage}>{"Next"}</button>
      {MyPagination?.map((recipe) => {
        return (
          <RecipeCard
            id={recipe.id}
            key={recipe.id}
            image={recipe.image}
            name={recipe.name}
            diets={recipe.diets.map((diet) => diet.name).join(",")}
          />
        );
      })}
    </>
  );
};

export default Pagination;
