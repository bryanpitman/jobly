import userContext from './userContext';
import { useContext } from "react";
import { Link } from "react-router-dom";

function Home() {
    const { user } = useContext(userContext);
    console.log('user', user.userData)

    if (user.userData) {
        return (
            <h1>Welcome back {user.userData.username}</h1>
        )
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
    )
}

export default Home;