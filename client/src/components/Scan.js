// Importting hooks and Libraries
import { useState, useRef, useCallback } from "react";
import "../App.css";
import axios from "axios";
import Webcam from "react-webcam";
import ScanExtractData from "./ScanExtractData";

export default function Scan() {
  const [responseData, setResponseData] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);

    axios
      .post("/api/processData/", { dateCaptured: new Date(), data: imageSrc })
      .then()
      .catch((err) => console.error(err));
  }, [webcamRef, setImgSrc]);

  return (
    <section className="not_sidebar scan">
      <Webcam
        audio={false}
        ref={webcamRef}
        height={400}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>

      {imgSrc && <img src={imgSrc} alt="captured-img" />}
      {/* <ScanExtractData responseData={responseData} /> */}
    </section>
  );
}
