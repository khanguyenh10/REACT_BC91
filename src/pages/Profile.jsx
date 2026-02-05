import React, { use } from 'react'
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>Profile {location.state.message}</div>
    )
}

export default Profile