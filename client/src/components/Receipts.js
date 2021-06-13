// Importting hooks and Libraries
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import IncExNavbar from "./IncExNavbar";

export default function Receipts() {

  const [state, setState] = useState({
    receipts: []
  });

  useEffect(() => {
    let isMounted = true;
    axios
      .get("/api/receipt/")
      .then((res) => {
        setState({ ...state, receipts: res.data });
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="not_sidebar receipts">
      <IncExNavbar type={"Receipts"} isScanPage={true}/>
      {state.receipts.map(receipt => (
        <Fragment key={receipt._id}>
          <div>captured at: {receipt.dateCaptured}</div>
          <img src={receipt.data} alt="captured-img" />
        </Fragment>
        ))}
    </section>
  );
}
