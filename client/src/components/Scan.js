// Importting hooks and Libraries
import { useState, useRef, useCallback, useContext } from "react";
import "../App.css";
import Webcam from "react-webcam";

import { ScannedDataContext } from '../ScannedDataContext'

export default function Scan(props) {
  const isDemo = props.isDemo || false;
  // const [responseData, setResponseData] = useState(null);
  // const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);

  const { responseData, setImgSrc, imgSrc } = useContext(ScannedDataContext);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);

  };

  // useEffect(() => {
  //   sendRequest(imgSrc);
  // },[imgSrc])
  
  // const sendRequest = useCallback((imageSrc) => {
  //   axios
  //     .post("/api/processData/", { url: imageSrc })
  //     .then((res) => handleData(JSON.parse(res.data)))
  //     .catch((err) => console.error(err));
  // },[imgSrc]);

  return (
    <section className="scan">
      <Webcam
        audio={false}
        ref={webcamRef}
        height={400}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      {isDemo && 
        <div>
          Total Amount: {responseData?.amount}
          <br />
          Date: {responseData?.depositDate}

          {imgSrc && <img src={imgSrc} alt="captured-image"/>}
        </div>
      }
    </section>
  );
}
