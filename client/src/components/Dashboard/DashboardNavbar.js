// Import react and pre-built methods;
import { useContext } from "react";
import Select from "react-dropdown-select";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';

// Import helper functions
import { createPastDate, dropDownOptions } from "../../helpers";

// Import Material-UI
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function DashboardNavbar(props) {
  const { setState, state, logoutCallback} = props;
  const {userName, setUserName} = useContext(UserContext);
  
  const onChange = function(value) {
    const queryDate = createPastDate(value[0].value.type, value[0].value.amount, value[0].value.format)
    setState({
      ...state, queryDate: queryDate
    });
  }

  const history = useHistory();
  const onClickFunc = function() {
    setUserName(null);
    logoutCallback();
    history.push("/signin");
  }

  return (
    <section className="dashboard_navbar">
      <div style={{display:"flex", alignItems:"center", width:"540px", justifyContent:"space-between"}}>
      <h1 style={{fontSize:'40px'}}>Dashboard</h1>
        <Select options={dropDownOptions}
        searchable={false}
        className={'regularFont'}
          color={'#303F9F'}
          onChange={onChange}
          dropdownGap={5}
          labelField={"label"}
          valueField={"key"}
          values={[dropDownOptions.find(opt => opt.label === "Last 10 days")]}
          multi={false}
          style={{width: "300px", height: '40px', backgroundColor: 'white', borderRadius: '15px', paddingLeft: '20px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.4)'}}
        />
      </div>
      <div style={{display:"flex", alignItems:"center", width:"280px", justifyContent:"space-between"}}>
          <div className={'regularFont'} style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <AccountCircleIcon style={{width:'40px', height:'40px'}}/>&nbsp;&nbsp;{userName}
          </div>
        <Button variant="contained" style={{width:'100px', height:'40px', backgroundColor:'#303F9F', color:'white', borderRadius:'15px'}} onClick={onClickFunc}>Logout</Button>
      </div>
    </section>
  );
}