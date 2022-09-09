import userContext from "./userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Home() {
  const { userData } = useContext(userContext);

  if (localStorage.getItem("token")) {
    if (userData) {
      return <h1>Welcome back {userData.username}</h1>;
    } else {
      return (
        <div
          className="spinner-border"
          style={{ width: "10rem", height: "10rem" }}
          role="status"
        ></div>
      );
    }
  }

  return (
    <>
      <h1>Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      <Link className="btn btn-primary fw-bold me-3" to="/login">
        Log in
      </Link>
      <Link className="btn btn-primary fw-bold me-3" to="/signup">
        Sign up
      </Link>
    </>
  );
}

export default Home;
