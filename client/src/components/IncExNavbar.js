import Select from "react-dropdown-select";
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useHistory } from 'react-router-dom';

export default function IncExNavbar(props) {

  const history = useHistory();
  const onClickFunc = function() {
    history.push("/signin");
  }

  return (
    <section className="dashboard_navbar">
      <div style={{display:"flex", alignItems:"center", width:"540px", justifyContent:"space-between"}}>
      <h1 style={{fontSize:'40px'}}>{props.type}</h1>
        { props.isScanPage ?  <div></div> : <Select options={props.options}
        className={'regularFont'}
          color={'#303F9F'}
          onChange={props.onChange}
          dropdownGap={5}
          labelField={"label"}
          valueField={"key"}
          values={[props.options?.find(opt => opt.label === "Last 10 days")]}
          multi={false}
          style={{width: "300px", height: '40px', backgroundColor: 'white', borderRadius: '15px', paddingLeft: '20px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.4)'}}
        /> }
      </div>
      <div style={{display:"flex", alignItems:"center", width:"280px", justifyContent:"space-between"}}>
          <div className={'regularFont'} style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <AccountCircleIcon style={{width:'40px', height:'40px'}}/>&nbsp;&nbsp;Username111
          </div>
        <Button variant="contained" style={{width:'100px', height:'40px', backgroundColor:'#303F9F', color:'white', borderRadius:'15px'}} onClick={onClickFunc}>Logout</Button>
      </div>
    </section>
  );
}