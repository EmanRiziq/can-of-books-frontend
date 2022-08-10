import { useAuth0 } from "@auth0/auth0-react";
// import react from "react";

function Profile() {
    const { user } = useAuth0();

    /* TODO: render information about the developers */
    return (
        <div className="profile-box">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}

export default Profile;