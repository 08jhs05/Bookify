import Select from "react-dropdown-select";

export default function DashboardNavbar(props) {

  const options = [
    {key: 1, label: "Last 10 days", value: {type: "last", amount: 10, format: "D"}},
    {key: 2, label: "This Month", value: {type: "this", format: "M"}},
    {key: 3, label: "Last 3 Months", value: {type: "last", amount: 3, format: "M"}},
    {key: 4, label: "This Year", value: {type: "this", format: "Y"}},
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
        values={[options.find(opt => opt.label === "This Month")]}
        multi={false}
        style={{width: "500px"}}
      />
    </section>
  );
}

function createPastDate(type, amount, format){
  let date = new Date();
  if(type === "last") {
    if(format === "D"){
      date.setDate(date.getDate() - amount);
    } else if(format === "M"){
      date.setMonth(date.getMonth() - amount);
      date.setDate(1);
    } else {
      date.setFullYear(date.getFullYear() - amount);
    }
  } else {
      if(format === "D"){
        //date = date.getDate()
      } else if(format === "M"){
        date.setDate(1);
      } else {
        date.setDate(1);
        date.setMonth(0);
      }
  }

  return date;
}