import { useState } from 'react';
import userContext from './userContext';
import { useContext } from "react";



/** Function for rendering an edit profile form
 *
 * State:
 * -formData: The form data
 *
 * RoutesList -> ProfileForm
 */

function ProfileForm() {

    const { updateProfile, user } = useContext(userContext);
    const {username, firstName, lastName, email} = user.userData;

    const INITIAL_FORM_DATA = {
        username,
        firstName,
        lastName,
        email,
    }



    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    /** Update form input. */
    function handleChange(evt) {
        const fieldName = evt.target.name;
        const value = evt.target.value;

        setFormData(currData => ({ ...currData, [fieldName]: value }))
    }

    /** Call parent function and clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        updateProfile(formData);
        setFormData(INITIAL_FORM_DATA);
    }
    return (
        <>
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

            <button className="btn-primary rig btn btn-sm">
                Save Changes
            </button>
        </form>
        </>
    );
}

export default ProfileForm;