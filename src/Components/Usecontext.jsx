import React, { createContext, useContext, useState} from "react";
const PriceContext=createContext();

export function PriceProvider({children}){
    const[currency,setCurrency]=useState("KES");

    return(
        <PriceContext.Provider value={{currency,setCurrency}}>
            {children}
            </PriceContext.Provider>

    );
}

export function usePrice() {
  return useContext(PriceContext);
}
