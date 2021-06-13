import { useState } from "react";
import { useHistory } from 'react-router-dom';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import Paper from '@material-ui/core/Paper';

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
    <Paper 
      onMouseEnter={onMouseEnterFunc}
      onMouseLeave={onMouseLeaveFunc}
      onClick={onClickFunc}
      className="paper_scanBtn" elevation={2} style={hover ? {borderRadius:'20px',  border: '1px solid', borderColor: '#303F9F'} :
      {borderRadius:'20px'}}>
      <div><PhotoCameraIcon style={{width:'120px', height:'120px', color: '#303F9F'}}/></div>
      <div className={'regularFont'} style={{fontSize:'18px'}}>Scan Your Receipt</div>
    </Paper>
  );
}