import DashboardCategories from "./DashboardCategories"
import DashboardGraph from "./DashboardGraph"
import DashboardNavbar from "./DashboardNavbar"
import ScanNewBtn from "./ScanNewBtn"
import Summary from "./Summary"

export default function Dashboard(props) {

  console.log(props.data)

  return (
    <section className="dashboard">
      <DashboardNavbar />
      <div className="dashboard_body">
        <div className="dashboard_body_left">
          <div className="dashboard_summary_section">
            <Summary />
            <Summary />
            <Summary />
          </div>
          <div className="dashboard_data_section">
            <DashboardCategories />
            <DashboardGraph />
          </div>
        </div>
        <ScanNewBtn />
      </div>
    </section>
  );
}