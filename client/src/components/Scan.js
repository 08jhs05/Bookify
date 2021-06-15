// Importting hooks and Libraries
import { useState, useRef, useEffect } from "react";
import "../App.css";
import Webcam from "react-webcam";
import axios from 'axios';
import Status from './Status';

//Importing Material UI
import { Chip, TextField, Paper } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Autocomplete } from "@material-ui/lab";
import IncExNavbar from "./IncExNavbar";


//Import helper functions
import { setCurrentDate } from "../helpers";

export default function Scan({logoutCallback}) {
  const currentDate = setCurrentDate();

  //useState for setting dates and amount. Grabs the data from the api call
  const [responseData, setResponseData] = useState({
    depositDate: "",
    amount: null
  });

  //useState for rest of the forms => Category uses tag feature
  const [category, setCategory] = useState([]);
  const [notes, setNotes] = useState("");

  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);

  const [showStatus, setShowStatus] = useState(false);
  const [controlSubmit, setControlSubmit] = useState(["disabled", "grey"]);

  //Captures the screenshot of the webcam and saves the image into base64 encoded data.
  const capture = () => {
    const imageSourceInBase64 = webcamRef.current.getScreenshot();
    setImgSrc(imageSourceInBase64);
    setShowStatus(true);
  }

  useEffect(() => {
    if (imgSrc) {
      apiCall(imgSrc)
    }
  },[imgSrc])


  //formats the response data from the api call for consistency of the variable name/key name
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
    .then((res) => {
      setShowStatus(false)
      setControlSubmit(["contained", "#303F9F"])
      return formatResponseData(JSON.parse(res.data)
      )})
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
    
    // Sends receipt data to the backend and also sends form data to expenses table.
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
        setControlSubmit(["disabled", "grey"]);
        
      })
      .catch(err => console.error(err));
  }
  
  return (
    <section className="not_sidebar scan">
      <IncExNavbar type={"Scan"} isScanPage={true} logoutCallback={logoutCallback}/>
      <div className="scan-component" >
      <Paper className="scan-direction" style={{borderRadius:'20px', width:'40%', marginBottom: '40px', padding: '0 20px 0 20px'}}>
      <div className="webcam-scan">
        <Webcam
          audio={false}
          ref={webcamRef}
          style={{borderRadius:'10px'}}
          height={350}
          screenshotFormat="image/jpeg"
        />
      </div>
      <Button variant="contained" style={{width:'200px', height:'40px', backgroundColor:'#303F9F', color:'white', borderRadius:'15px', marginTop:'20px'}} onClick={capture}>
        <PhotoCamera />
      </Button>
      {showStatus? <Status message="Processing.." /> : false}
      </Paper>
      <Paper className="scan-direction" style={{borderRadius:'20px', width:'40%', marginBottom: '40px'}}>
        <h2> Expense Form</h2>
        <div className="scan-field">
          <TextField
            id="depositDate"
            type="date"
            value={responseData.depositDate?.substr(0, 10)}
            onChange={(event) => handleDataChange({
              ...responseData,
              depositDate: event.target.value
            })}
            fullWidth
            inputProps={{ max: `${currentDate}`}}
          />
        </div>
        <div className="scan-field">
          <TextField
            id="amount"
            label="Enter Amount"
            value={responseData.amount ?responseData.amount.toString() : ""}
            type="number"
            onChange={(event) => handleDataChange({...responseData, amount: Number(event.target.value)})}
            fullWidth
            onWheel={() => document.activeElement.blur()}
          />
        </div>
        <div className="scan-field">
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
            onChange={(event, newValue) => setCategory(newValue)}
          />
        </div>
        <div className="scan-field">
          <TextField
            id="notes"
            label="Enter Notes"
            value={notes}
            type="text"
            onChange={(event) => setNotes(event.target.value)}
            fullWidth
          />
        </div>

        <div className="scan-button">
          <Button variant={controlSubmit[0]} style={{width:'200px', height:'40px', backgroundColor:`${controlSubmit[1]}`, color:'white', borderRadius:'15px', marginTop:'20px'}} onClick={formSubmit}>
            Submit
          </Button>
        </div>
      </Paper>
      </div>
    </section>
  );
}
