import { createContext, useState, useContext, useEffect } from "react";

//step:1  create context
//here CurrencyContext is the context object which has got the state that we need to make availabe in entire application.

const CurrencyContext = createContext();

//step:2 Provider Function which provides the state to the entire app.

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  useEffect(() => {
    if (currency === "INR") {
      setSymbol("₹");
    } else if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};
//Now the question is what is this children?
//Btw we can name it anything we want but it is just a convention to name children..
//whatever inside provider component will automatically passed as a prop inside that and provider component will render that..
//as we can see in it returns the children prop, although when you warp An entire app you don't need to pass any prop.

//====================================================================
// Step 3: Create a custom hook for consuming the context

//this is optional but we are doing this because By doing this  we don't need to use useContext in any component.
//we dont need to import the CurrencyContext in any component.just one import which is useCurrencyContext.
function useCurrencyContext() {
  return useContext(CurrencyContext);
}

export { CurrencyProvider, useCurrencyContext };
