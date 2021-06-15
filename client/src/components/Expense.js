// Import react and axios
import { useEffect, useState } from "react";
import axios from "axios";

// Import different components
import ExpenseForm from "./Form/ExpenseForm";
import IncomeExpenseGraph from "./IncomeExpenseGraph";
import IncomeExpenseSummary from "./IncomeExpenseSummary";
import Datalist from "./Datalist";
import IncExNavbar from "./IncExNavbar";

// Import helper functions
import { createPastDate, daysDifference } from "../helpers";

//Import Material-UI
import Paper from '@material-ui/core/Paper';

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

export default function Expense({logoutCallback}) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() - 10); // default date to query when user just loads this page

  const [state, setState] = useState({
    queryDate: newDate,
    data: []
  });

  const [reload, setReload] = useState(false);

  useEffect(() => {
    let isMounted = true;
  
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

  const deleteBtnOnClick = function (id) {
    axios.delete("/api/expenses", { params: { id: id } })
    .then(() => setReload(!reload))
    .catch((err) => console.error(err));
  };

  return (
    <div className="not_sidebar expense-form">
      <IncExNavbar type="Expenses" 
        options={options}
        onChange={onChange}
        logoutCallback={logoutCallback} />
      <Paper className="income-expense-direction" style={{height:'30vh', borderRadius:'20px', margin: '0 40px 40px 40px', padding:'20px'}}>
        <div className="graph-wrapper">
          <IncomeExpenseGraph data={state.data} daysAgo={daysAgo} />
        </div>
        <div>
          <IncomeExpenseSummary data={state.data} daysAgo={daysAgo}/>
        </div>
      </Paper>
      <div style={{margin:'0 40px 0 40px'}}>
        <ExpenseForm reloadPage={() => setReload(!reload)} />
        <Datalist
          data={state.data}
          deleteBtnOnClick={deleteBtnOnClick}
          reloadPage={() => setReload(!reload)}
          type={"expense"}
        />
      </div>
    </div>
  );
}
