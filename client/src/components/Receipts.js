// Importting hooks and Libraries
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

export default function Receipts() {

  const [state, setState] = useState({
    receipts: []
  });

  useEffect(() => {
    let isMounted = true;
    axios
      .get("/api/processData/")
      .then((res) => {
        setState({ ...state, receipts: res.data });
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="receipts">
      {state.receipts.map(receipt => (
        <Fragment key={receipt._id}>
          <div>captured at: {receipt.dateCaptured}</div>
          <img src={receipt.data} alt="captured-img" />
        </Fragment>
        ))}
    </section>
  );
}
