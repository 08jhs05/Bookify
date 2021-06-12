// Importting hooks and Libraries
import { useState, useRef, useCallback } from "react";
import "../App.css";
import axios from "axios";
import Webcam from "react-webcam";

export default function Scan() {
  const [responseData, setResponseData] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);

    axios
      .post("/api/processData/", { url: imageSrc })
      .then((res) => setResponseData(JSON.parse(res.data)))
      .catch((err) => console.error(err));
  }, [webcamRef, setImgSrc]);

  return (
    <section className="scan">
      <Webcam
        audio={false}
        ref={webcamRef}
        height={400}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>

      {imgSrc && <img src={imgSrc} alt="captured-img" />}

      <section className="extracted-data">
      Total Amount: {responseData?.totalAmount?.data}
      <br />
      Date: {responseData?.date?.data}
    </section>
    </section>
  );
}
