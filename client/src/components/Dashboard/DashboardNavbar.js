import Select from "react-dropdown-select";
import { createPastDate } from "../../helpers";
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function DashboardNavbar(props) {

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

  return (
    <section className="navbar_dashboard">
      <div>Get Data Of:&nbsp;&nbsp;&nbsp;</div>
      <Select options={options}
        onChange={onChange}
        dropdownGap={5}
        labelField={"label"}
        valueField={"key"}
        values={[options.find(opt => opt.label === "Last 10 days")]}
        multi={false}
        style={{width: "500px"}}
      />
      <div style={{margin:'10px 30px 10px auto', display:'flex', alignItems:'center'}}>
        <AccountCircleIcon style={{width:'40px', height:'40px'}}/>
        &nbsp;&nbsp;&nbsp;Username111&nbsp;&nbsp;&nbsp;
        <Button variant="contained" style={{width:'100px', height:'40px'}} onClick={props.logoutCallback}>Logout</Button>
      </div>
    </section>
  );
}