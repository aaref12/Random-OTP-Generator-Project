import { useState,useEffect } from "react";


    
function useCurrencyChanger(currency){
    const [currencyData, setCurrencyData] = useState({});
    useEffect(()=>{
     fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
     .then((res)=>res.json())
     .then((res)=>{
        setCurrencyData(res)
     })
     console.log(currencyData)
    },[currency])
    return currencyData
}


export default useCurrencyChanger;
// This custom hook fetches currency data from an API based on the provided currency code.