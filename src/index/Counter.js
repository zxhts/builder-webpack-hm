import React, { useState, useEffect, useLayoutEffect } from "react";
const Counter = ({ step }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect====");
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect====");
  });
  const onBtnClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ margin: "50px" }}>
      <button onClick={onBtnClick}>{count}</button>
      <div>props：{step}</div>
      {!(count % 2) && <div>函数组件，复数显示，单数隐藏</div>}
    </div>
  );
};

export default Counter;