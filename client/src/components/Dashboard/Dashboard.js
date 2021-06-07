import Categories_dashboard from "./Categories_dashboard"
import Graph_dashboard from "./Graph_dashboard"
import Navbar_dashboard from "./Navbar_dashboard"
import ScanNewBtn from "./ScanNewBtn"
import Summary from "./Summary"

export default function Dashboard(props) {

  console.log(props.data)

  return (
    <section className="dashboard">
      <Navbar_dashboard />
      <div className="dashboard_body">
        <div className="dashboard_body_left">
          <div className="dashboard_summary_section">
            <Summary />
            <Summary />
            <Summary />
          </div>
          <div className="dashboard_data_section">
            <Categories_dashboard />
            <Graph_dashboard />
          </div>
        </div>
        <ScanNewBtn />
      </div>
    </section>
  );
}