import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useId } from "../hooks";
import { MyContext } from "index";
//import { userState, idState } from "atoms";
//import { useRecoilState, useRecoilValue } from "recoil";

function Home() {
  // const id = useRecoilValue(idState);
  //const [username, setUsernamme] = useRecoilState(userState);

  //const data = useContext(MyContext);
  // const data = useContext(React.createContext({ name: "andres", años: 1 }));
  const id = useId();
  return <div>dato:{id}</div>;
}
export { Home };
