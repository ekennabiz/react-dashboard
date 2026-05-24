import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/Dashboard.css";
import "../styles/Topbar.css";
import "../styles/Sidebar.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">

        <Topbar />

        <div className="content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;