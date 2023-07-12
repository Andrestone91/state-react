import React from "react";
import { Outlet } from "react-router-dom";
import { useSearchResult } from "hooks";
import { SearchForm } from "./searchForm";

function Layout(props) {
  // const id = useId();
  return (
    <div>
      <header>header. data:</header>
      <SearchForm></SearchForm>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
export { Layout };
