// Importting hooks and Libraries
import { useState, useRef, useEffect } from "react";
import "../App.css";
import Webcam from "react-webcam";

//Importing Material UI
import { Chip, IconButton, TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Autocomplete } from "@material-ui/lab";
import axios from 'axios';

export default function Scan() {
  const date = new Date();
  date.setDate(date.getDate());
  const currentDate = date.toISOString().substr(0, 10);

  const [responseData, setResponseData] = useState({
    depositDate: "",
    amount: null
  });
  const [category, setCategory] = useState([]);
  const [notes, setNotes] = useState("");

  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSourceInBase64 = webcamRef.current.getScreenshot();
    setImgSrc(imageSourceInBase64);
  }

  useEffect(() => {
    if (imgSrc) {
      apiCall(imgSrc)
    }
  },[imgSrc])

  const formatResponseData = (value) => {
    const data = {
      depositDate: value.date.data,
      amount: value.totalAmount.data
    }

    setResponseData({
      depositDate: data.depositDate,
      amount: data.amount
    })
  } 

  const apiCall = async () => {
    await axios
    .post("/api/processData/", { data: imgSrc })
    .then((res) => formatResponseData(JSON.parse(res.data)))
    .catch((err) => console.error(err));
  };

  const handleDataChange = (value) => {
    setResponseData({
      depositDate: value.depositDate,
      amount: value.amount
    })
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const completeFormValues = {
      notes,
      category,
      depositDate: responseData.depositDate,
      amount: responseData.amount
    };

    return Promise.all([
        axios.post("/api/receipt", {dateCaptured: responseData.depositDate, data: imgSrc}),
        axios.put("/api/expenses", completeFormValues)
      ])
      .then(() => {
        setResponseData({
          depositDate: "",
          amount: null
        });
        setCategory([]);
        setNotes("");
        
      })
      .catch(err => console.error(err));
  }
  
  return (
    <section className="not_sidebar scan">
      <Webcam
        audio={false}
        ref={webcamRef}
        height={350}
        screenshotFormat="image/jpeg"
      />
        <IconButton className="photo-icon" color="primary" aria-label="upload picture" component="span" onClick={capture}>
          <PhotoCamera />
        </IconButton>
      <section className="scan-form">
        <TextField
          id="depositDate"
          type="date"
          value={responseData.depositDate.substr(0, 10)}
          onChange={(event) => handleDataChange({
            ...responseData,
            depositDate: event.target.value
          })}
          fullWidth
          inputProps={{ max: `${currentDate}`}}
        />

        <TextField
          id="amount"
          label="Enter Amount"
          value={responseData.amount ?responseData.amount.toString() : ""}
          type="number"
          onChange={(event) => handleDataChange({...responseData, amount: Number(event.target.value)})}
          fullWidth
          onWheel={() => document.activeElement.blur()}
        />

        <Autocomplete
          multiple
          id="category"
          value={category}
          options={[]}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} label="Enter category" />
          )}
          onChange={(event) => setCategory([...category, event.target.value])}
        />

        <TextField
          id="notes"
          label="Enter Notes"
          value={notes}
          type="text"
          onChange={(event) => setNotes(event.target.value)}
          fullWidth
        />
        
        <Button onClick={formSubmit} color="primary">
          Submit
        </Button>
      </section>

    </section>
  );
}
