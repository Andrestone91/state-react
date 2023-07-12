import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useId } from "hooks";
import { MyContext } from "index";
//import { idState } from "atoms";
//import { useRecoilState, useRecoilValue } from "recoil";

function Layout(props) {
  //const id = useRecoilValue(idState);
  // const [username, setUsernamme] = useRecoilState(userState);
  // const data = useContext(MyContext);
  const id = useId();
  return (
    <div>
      <header>header. data:{id}</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
export { Layout };
