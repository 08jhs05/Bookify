import { useEffect, useState } from "react";
import axios from "axios";

import DashboardCategories from "./DashboardCategories"
import DashboardGraph from "./DashboardGraph"
import DashboardNavbar from "./DashboardNavbar"
import ScanNewBtn from "./ScanNewBtn"
import Summary from "./Summary"

export default function Dashboard(props) {

  const newDate = new Date();
  newDate.setDate(newDate.getDate() - 10);

  const [state, setState] = useState( {
    queryDate: newDate,
    data: {}
  });

  useEffect( () => {
    const promises = [axios.get('/api/incomes', { params: { queryDate: state.queryDate } }), axios.get('/api/expenses', { params: { queryDate: state.queryDate } })];
    Promise.all(promises).then( (res) => {
      setState({ ...state, data: { incomes: res[0].data, expenses: res[1].data }});
      console.log(res[0].data);
      console.log(res[1].data);
    });
  }, [state.queryDate]);

  return (
    <section className="dashboard">
      <DashboardNavbar state={state} setState={setState}/>
      <div className="dashboard_body">
        <div className="dashboard_body_left">
          <div className="dashboard_summary_section">
            <Summary />
            <Summary />
            <Summary />
          </div>
          <div className="dashboard_data_section">
            <DashboardCategories />
            <DashboardGraph data={state.data.incomes}/>
          </div>
        </div>
        <ScanNewBtn />
      </div>
    </section>
  );
}