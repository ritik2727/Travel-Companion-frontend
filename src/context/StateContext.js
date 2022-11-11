import React, { useState, useEffect, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [dis, setdis] = useState(0); 
  const [couponAppield,setCouponAppield] = useState(false);

  return (
    <StateContext.Provider
    value={{ds:[dis,setdis],
      t:[couponAppield,setCouponAppield]
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
