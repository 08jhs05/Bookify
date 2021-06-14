import Select from "react-dropdown-select";
import { createPastDate } from "../../helpers";
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { useContext } from "react";

export default function DashboardNavbar(props) {

  const {userName, setUserName} = useContext(UserContext);
  
  console.log(userName);

  const options = [
    {key: 0, label: "Last 10 days", value: {type: "last", amount: 10, format: "D"}},
    {key: 1, label: "Last 30 days", value: {type: "last", amount: 30, format: "D"}},
    {key: 2, label: "Current Month", value: {type: "this", format: "M"}},
    {key: 3, label: "Last 3 Months", value: {type: "last", amount: 3, format: "M"}},
    {key: 4, label: "Current Year", value: {type: "this", format: "Y"}},
    {key: 5, label: "Everything", value: {type: "last", amount: 10, format: "M"}}
  ];

  const onChange = function(value) {
    const queryDate = createPastDate(value[0].value.type, value[0].value.amount, value[0].value.format)
    props.setState({
      ...props.state, queryDate: queryDate
    });
  }

  const history = useHistory();
  const onClickFunc = function() {
    setUserName(null);
    props.logoutCallback();
    history.push("/signin");
  }

  return (
    <section className="dashboard_navbar">
      <div style={{display:"flex", alignItems:"center", width:"540px", justifyContent:"space-between"}}>
      <h1 style={{fontSize:'40px'}}>Dashboard</h1>
        <Select options={options}
        searchable={false}
        className={'regularFont'}
          color={'#303F9F'}
          onChange={onChange}
          dropdownGap={5}
          labelField={"label"}
          valueField={"key"}
          values={[options.find(opt => opt.label === "Last 10 days")]}
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