import { createContext, useState, useEffect, useCallback } from 'react'
import axios from "axios";

export const ContextComponent = (props) => {
  const [responseData, setResponseData] = useState({
    depositDate: "",
    amout: null
  });
  const [imgSrc, setImgSrc] = useState(null);

  const formatResponseData = (values) => {
    const data = {
      depositDate: values.date.data,
      amount: values.totalAmount.data
    }
    setResponseData({
      depositDate: data.depositDate,
      amount: data.amount
    })
  }
  /**
   * 
   * {
   *  depositDate: new Date()
   *  amount: integer
   * }
   */
  const handleDataChange = (value) => {
    console.log("state's amount", value.amount)
    setResponseData({
      depositDate: value.depositDate,
      amount: value.amount
    })
  };

  useEffect(() => {
    if(imgSrc){
      sendRequest(imgSrc);
    }
  },[imgSrc])
  
  const sendRequest = useCallback((imageSrc) => {
    axios
      .post("/api/processData/", { url: imageSrc })
      .then((res) => formatResponseData(JSON.parse(res.data)))
      .catch((err) => console.error(err));
  },[imgSrc]);

  const value = {
    responseData,
    handleDataChange,
    setImgSrc
  }

  return (
    <ScannedDataContext.Provider value={value}>
      {props.children}
    </ScannedDataContext.Provider>
  );
}


export const ScannedDataContext = createContext(null);



