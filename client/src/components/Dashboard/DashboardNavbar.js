import Select from "react-dropdown-select";
import { createPastDate } from "../../helpers";

export default function DashboardNavbar(props) {

  const options = [
    {key: 0, label: "Last 10 days", value: {type: "last", amount: 10, format: "D"}},
    {key: 1, label: "Last 30 days", value: {type: "last", amount: 30, format: "D"}},
    {key: 2, label: "Current Month", value: {type: "this", format: "M"}},
    {key: 3, label: "Last 3 Months", value: {type: "last", amount: 3, format: "M"}},
    {key: 4, label: "Current Year", value: {type: "this", format: "Y"}},
    {key: 5, label: "Everything", value: {type: "last", amount: 10, format: "Y"}}
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
    </section>
  );
}