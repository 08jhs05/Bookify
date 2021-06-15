// Import react and axios
import { useEffect, useState } from "react";
import axios from "axios";

// Import helper functions
import { daysDifference, dropDownOptions, createPastDate } from "../helpers";

// Import components
import IncomeForm from "./Form/IncomeForm";
import Datalist from "./Datalist";
import IncomeExpenseGraph from "./IncomeExpenseGraph";
import IncomeExpenseSummary from "./IncomeExpenseSummary";
import IncExNavbar from "./IncExNavbar";

// Import Material-UI
import Paper from '@material-ui/core/Paper';


let daysAgo = 0;

export default function Income({logoutCallback}) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() - 10); // default date to query when user just loads this page

  const [state, setState] = useState({
    queryDate: newDate,
    data: []
  });

  const [reload, setReload] = useState(false);

  useEffect(() => {
    const today = new Date();
    daysAgo = daysDifference(state.queryDate, today);

    axios
      .get("/api/incomes", { params: { queryDate: state.queryDate } })
      .then((res) => {
        setState((prev) => ({ ...prev, data: res.data }));
      });
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
    axios.delete("/api/incomes", { params: { id: id } })
    .then(() => setReload(!reload))
    .catch((err) => console.error(err));
  };

  return (
    <section className="not_sidebar income">
      <IncExNavbar type="Incomes" 
        options={dropDownOptions}
        onChange={onChange}
        logoutCallback={logoutCallback}/>
      <Paper className="income-expense-direction" style={{height:'30vh', borderRadius:'20px', margin: '0 40px 40px 40px', padding:'20px'}}>
        <div className="graph-wrapper">
          <IncomeExpenseGraph data={state.data} daysAgo={daysAgo} type={'incomes'}/>
        </div>
        <div>
          <IncomeExpenseSummary data={state.data} daysAgo={daysAgo}/>
        </div>
      </Paper>
      <div style={{margin:'0 40px 0 40px'}}>
        <IncomeForm reloadPage={() => setReload(!reload)} />
        <Datalist
          data={state.data}
          deleteBtnOnClick={deleteBtnOnClick}
          reloadPage={() => setReload(!reload)}
          type={"income"}
        />
      </div>
    </section>
  );
}
