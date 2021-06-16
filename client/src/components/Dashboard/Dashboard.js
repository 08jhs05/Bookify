import { useEffect, useState } from "react";
import axios from "axios";
import { daysDifference } from "../../helpers";

import DashboardCategories from "./DashboardCategories";
import DashboardGraph from "./DashboardGraph";
import DashboardNavbar from "./DashboardNavbar";
import ScanNewBtn from "./ScanNewBtn";
import Summary from "./Summary";

import Grid from '@material-ui/core/Grid';

let daysAgo = 0;

export default function Dashboard({logoutCallback}) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() - 10);

  const [state, setState] = useState({
    queryDate: newDate,
    data: { incomes: [], expenses: [] }
  });

  const reload = function(){
    setState({...state});
  }

  useEffect(() => {
    const today = new Date();

    daysAgo = daysDifference(state.queryDate, today);

    const promises = [
      axios.get("/api/incomes", { params: { queryDate: state.queryDate } }),
      axios.get("/api/expenses", { params: { queryDate: state.queryDate } }),
    ];
    Promise.all(promises).then((res) => {
      setState((prev) => ({
        ...prev,
        data: { incomes: res[0].data, expenses: res[1].data },
      }));
    });
  }, [state.queryDate]);

  return (
    <Grid container className="not_sidebar dashboard">
      <Grid item xs={12} className="dashboard_navbar_grid">
        <DashboardNavbar state={state} setState={setState} logoutCallback={logoutCallback}/>
      </Grid>
      <Grid container item xs={12} className="dashboard_body">
        <Grid container item xs={9} className="dashboard_body_left">
          <Grid container className="dashboard_summary_section">
            <Grid item xs={4} className="summary_grid">
              <Summary data={state.data} daysAgo={daysAgo} type={"INCOME"}/>
            </Grid>
            <Grid item xs={4} className="summary_grid">
              <Summary data={state.data} daysAgo={daysAgo} type={"EXPENSE"}/>
            </Grid>
            <Grid item xs={4} className="summary_grid">
              <Summary data={state.data} daysAgo={daysAgo} type={"BALANCE"}/>
            </Grid>
          </Grid>
            <Grid container className="dashboard_data_section">
              <Grid item xs={6} className="dashboard_data_grid">
                <DashboardCategories data={state.data} callback={reload}/>
              </Grid>
              <Grid item xs={6} className="dashboard_data_grid">
                <DashboardGraph data={state.data} daysAgo={daysAgo} />
              </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} className="dashboard_scanBtn_grid">
          <ScanNewBtn />
        </Grid>
      </Grid>
    </Grid>
  );
}
