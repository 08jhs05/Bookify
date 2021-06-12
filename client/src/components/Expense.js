import { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import axios from "axios";

import { daysDifference } from "../helpers";

import ExpenseForm from "./Form/ExpenseForm";
import IncomeExpenseGraph from "./IncomeExpenseGraph";
import ExpenseGraph from "./ExpenseGraph";
import Datalist from "./Datalist";
import { createPastDate } from "../helpers";

const options = [
  {
    key: 0,
    label: "Last 10 days",
    value: { type: "last", amount: 10, format: "D" },
  },
  {
    key: 1,
    label: "Last 30 days",
    value: { type: "last", amount: 30, format: "D" },
  },
  { key: 2, label: "Current Month", value: { type: "this", format: "M" } },
  {
    key: 3,
    label: "Last 3 Months",
    value: { type: "last", amount: 3, format: "M" },
  },
  { key: 4, label: "Current Year", value: { type: "this", format: "Y" } },
  {
    key: 5,
    label: "Everything",
    value: { type: "last", amount: 10, format: "M" },
  },
];

let daysAgo = 0;

export default function Expense(props) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() - 10); // default date to query when user just loads this page

  const [state, setState] = useState({
    queryDate: newDate,
    data: []
  });

  const [reload, setReload] = useState(false);

  useEffect(() => {
    let isMounted = true;
    /////////////
    const today = new Date();
    daysAgo = daysDifference(state.queryDate, today);

    axios
      .get("/api/expenses", { params: { queryDate: state.queryDate } })
      .then((res) => {
        setState({ ...state, data: res.data });
      });
    return () => {
      isMounted = false;
    };
  }, [state.queryDate, reload]);

  const onChange = function (value) {
    const queryDate = createPastDate(
      value[0].value.type,
      value[0].value.amount,
      value[0].value.format
    );
    setState({
      ...state,
      queryDate: queryDate,
    });
  };

  const editBtnOnClick = function () {
    console.log("edit clicked");
  };

  const deleteBtnOnClick = function (id) {
    axios.delete("/api/expenses", { params: { id: id } }).then((res) => {
      setReload(!reload);
    });
  };

  return (
    <div className="not_sidebar expense-form">
      <Select
        options={options}
        onChange={onChange}
        dropdownGap={5}
        labelField={"label"}
        valueField={"key"}
        values={[options.find((opt) => opt.label === "Last 10 days")]}
        multi={false}
        style={{ width: "500px" }}
      />
      <IncomeExpenseGraph data={state.data} daysAgo={daysAgo} />
      <ExpenseForm reloadPage={() => setReload(!reload)} />
      <Datalist
        data={state.data}
        editBtnOnClick={editBtnOnClick}
        deleteBtnOnClick={deleteBtnOnClick}
        reloadPage={() => setReload(!reload)}
        type={"expense"}
      />
    </div>
  );
}
