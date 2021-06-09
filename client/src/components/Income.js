import { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import axios from "axios";

import IncomeForm from './Form/IncomeForm';
import Datalist from './Datalist';
import { createPastDate } from "../helpers";
import IncomeExpenseGraph from './IncomeExpenseGraph'

const options = [
  {key: 1, label: "Last 10 days", value: {type: "last", amount: 10, format: "D"}},
  {key: 2, label: "This Month", value: {type: "this", format: "M"}},
  {key: 3, label: "Last 3 Months", value: {type: "last", amount: 3, format: "M"}},
  {key: 4, label: "This Year", value: {type: "this", format: "Y"}},
  {key: 5, label: "Everything", value: {type: "last", amount: 10, format: "Y"}}
];

export default function Income(props) {

  const newDate = new Date();
  newDate.setDate(newDate.getDate() - 10);  // default date to query when user just loads this page
  
  const [state, setState] = useState( {
    queryDate: newDate,
    data: {}
  });

  useEffect( () => {
    axios.get('/api/incomes', { params: { queryDate: state.queryDate } }).then( (res) => {
      setState({ ...state, data: res.data });
    });
  }, [state.queryDate]);

  const onChange = function(value) {
    const queryDate = createPastDate(value[0].value.type, value[0].value.amount, value[0].value.format)
    setState({
      ...state, queryDate: queryDate
    });
  }

  return (
    <section className="income">
      <Select options={options}
        onChange={onChange}
        dropdownGap={5}
        labelField={"label"}
        valueField={"key"}
        values={[options.find(opt => opt.label === "Last 10 days")]}
        multi={false}
        style={{width: "500px"}}
      />
      <IncomeExpenseGraph />
      <IncomeForm />
      <Datalist data={state.data}/>
    </section>
  );
}