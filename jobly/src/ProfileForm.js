import { useState } from 'react';
import userContext from './userContext';
import { useContext } from "react";
import Alert from './Alert';


/** Function for rendering an edit profile form
 *
 * Props:
 * - updateProfile: functio to handle updating profile
 *
 * State:
 * -formData: The form data
 *
 * RoutesList -> ProfileForm
 */

function ProfileForm({updateProfile}) {

    const {userData} = useContext(userContext);
    const {username, firstName, lastName, email} = userData;

    const INITIAL_FORM_DATA = {
        username,
        firstName,
        lastName,
        email,
    }

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [updated, setUpdated] = useState(false);
    const [wrongCredentials, setWrongCredentials] = useState([]);

    /** Update form input. */
    function handleChange(evt) {
        const fieldName = evt.target.name;
        const value = evt.target.value;

        setFormData(currData => ({ ...currData, [fieldName]: value }))
    }

    /** Call parent function and clear form. */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await updateProfile(formData);
            setUpdated(true);
            // setFormData(INITIAL_FORM_DATA);
            // Do we even need to setFormData again? Since it'll already be updated?
        }
        catch (err) {
            setWrongCredentials(err);
        }
        // NOTE: err is an array of error messages!!!
    }
    return (
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label>Username</label>
                <input disabled={true}
                    id="username"
                    name="username"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.username}
                    aria-label="Username"
                />
            </div>

            <div className="mb-3">
            <label>First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.firstName}
                    aria-label="First Name"
                />
            </div>

            <div className="mb-3">
            <label>Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.lastName}
                    aria-label="Last Name"
                />
            </div>

            <div className="mb-3">
            <label>Email</label>
                <input
                    id="email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.email}
                    aria-label="Email"
                />
            </div>
            {updated &&
                    <Alert message="Updated Successfully!" type="success"/>}
            {wrongCredentials &&
                    wrongCredentials.map(
                        err => <Alert key={err} message={err} type="danger"/>)}
            <button className="btn-primary rig btn btn-sm">
                Save Changes
            </button>
        </form>
        </div>
    );
}

export default ProfileForm;