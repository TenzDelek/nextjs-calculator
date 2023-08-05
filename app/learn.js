"use client";
import styles from "./page.module.css";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, textchange: state.textchange };
    case "toggletext":
      return { count: state.count, textchange: !state.textchange };
    default:
      state;
  }
}
export default function Home() {
  const[data,setData]=useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email)
        console.log("api call")
      },[]);
  });
  const [value, setValue] = useState(false);
  const toggle = () => {
    setValue(!value);
    console.log(value);
  };
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    textchange: false,
  });
  return (
    <div className={styles.main}>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "toggletext" });
        }}
      >
        clickme
      </button>
      {state.textchange && <p>my name</p>}
      {data}
      <div className={styles.buttons} onClick={toggle}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
