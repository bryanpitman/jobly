import { useState } from 'react';
import userContext from './userContext';
import { useContext } from "react";
import { useNavigate } from "react-router-dom"


/** Function for rendering a login form
 *
 * State:
 * -formData: The form data
 *
 * RoutesList -> LoginForm
 */

function LoginForm() {
    const INITIAL_FORM_DATA = {
        username: '',
        password: '',
    }
    const navigate = useNavigate();
    const { login } = useContext(userContext);

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    /** Update form input. */
    function handleChange(evt) {
        const fieldName = evt.target.name;
        const value = evt.target.value;

        setFormData(currData => ({ ...currData, [fieldName]: value }))
    }

    /** Call parent function, clear form and return to homepage. */
    function handleSubmit(evt) {
        evt.preventDefault();
        login(formData);
        setFormData(INITIAL_FORM_DATA);
        navigate("/");
        // why doesn't return Navigate to= work?
    }
    return (
        <>
        <h1>Login!</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Username</label>
                <input
                    id="username"
                    name="username"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.username}
                    aria-label="Username"
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.password}
                    aria-label="Password"
                />
            </div>
            <button className="btn-primary rig btn btn-sm">
                Submit!
            </button>
        </form>
        </>
    );
}

export default LoginForm;