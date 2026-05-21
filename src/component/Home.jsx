import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>

      <button className="about-btn" onClick={goToAbout}>
        Go to About Page
      </button>

      <div className="home-menu">
        <NavLink to="/home/course">Course</NavLink>
        <NavLink to="/home/nat-test">NAT Test</NavLink>
        <NavLink to="/home/result">Result</NavLink>
        <NavLink to="/home/records">Records</NavLink>
        <NavLink to="/home/students">Students</NavLink>
      </div>

      <div className="home-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;