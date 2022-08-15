import "./navbar.scss";

export default function Navbar({ onCollapse }) {
  return (
    <div className="content-section">
      <div>
        <i
          className="fa-solid fa-bars"
          style={{ cursor: "pointer" }}
          onClick={onCollapse}
        ></i>
        <h2>Dashboard</h2>
      </div>
    </div>
  );
}
