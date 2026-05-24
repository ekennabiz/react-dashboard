import "../styles/Topbar.css";

function Topbar() {
  return (
    <div className="topbar">

      <div className="topbar-left">
        <input
          type="text"
          placeholder="Search dashboard..."
          className="search-input"
        />
      </div>

      <div className="topbar-right">

        <div className="icon-box">🔔</div>

        <div className="profile-circle">
          RC
        </div>

      </div>

    </div>
  );
}

export default Topbar;