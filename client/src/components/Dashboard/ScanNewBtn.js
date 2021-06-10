import { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function ScanNewBtn(props) {

  const [hover, setHover] = useState(false)

  const onMouseEnterFunc = function() {
    setHover(!hover);
  }

  const onMouseLeaveFunc = function() {
    setHover(!hover);
  }

  const history = useHistory();
  const onClickFunc = function() {
    history.push("/scan");
  }

  return (
    <section className="scanNewBtn"
      style={hover ? {border: '4px dashed black', backgroundColor: 'gainsboro'} : {border: '4px dashed black'}}
      onMouseEnter={onMouseEnterFunc}
      onMouseLeave={onMouseLeaveFunc}
      onClick={onClickFunc}>
      <div>Scan Your Receipt</div>
    </section>
  );
}