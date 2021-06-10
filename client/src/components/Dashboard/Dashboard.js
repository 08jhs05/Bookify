import { useEffect, useState } from "react";
import axios from "axios";
import { daysDifference } from "../../helpers";

import DashboardCategories from "./DashboardCategories";
import DashboardGraph from "./DashboardGraph";
import DashboardNavbar from "./DashboardNavbar";
import ScanNewBtn from "./ScanNewBtn";
import Summary from "./Summary";

let daysAgo = 0;

export default function Dashboard(props) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() - 10);

  const [state, setState] = useState({
    queryDate: newDate,
    data: { income: [], expenses: [] },
  });

  useEffect(() => {
    console.log("state changed");

    const today = new Date();

    console.log(today);
    console.log(state.queryDate);

    daysAgo = daysDifference(state.queryDate, today);

    const promises = [
      axios.get("/api/incomes", { params: { queryDate: state.queryDate } }),
      axios.get("/api/expenses", { params: { queryDate: state.queryDate } }),
    ];
    Promise.all(promises).then((res) => {
      setState({
        ...state,
        data: { incomes: res[0].data, expenses: res[1].data },
      });
      // console.log(res[0].data);
      // console.log(res[1].data);
    });
  }, [state.queryDate]);

  return (
    <section className="dashboard">
      <DashboardNavbar state={state} setState={setState} />
      <div className="dashboard_body">
        <div className="dashboard_body_left">
          <div className="dashboard_summary_section">
            <Summary />
            <Summary />
            <Summary />
          </div>
          <div className="dashboard_data_section">
            <DashboardCategories />
            <DashboardGraph data={state.data.incomes} daysAgo={daysAgo} />
          </div>
        </div>
        <ScanNewBtn />
      </div>
    </section>
  );
}
