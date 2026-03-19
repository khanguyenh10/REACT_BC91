import React, { use, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { getProfileActionApiAsync } from '../redux/reducer/UserLoginReducer';
import useRedux from './CustomHook/useRedux';

const Profile = () => {
    const { dispatch, rootState } = useRedux();
    const { userProfile } = rootState.UserLoginReducer;
    useEffect(() => {
        dispatch(getProfileActionApiAsync());
    }, [])
    const location = useLocation();
    console.log(location);
    return (
        <div>Profile {location.state?.message}
            {userProfile && <div>
                <p>Email: {userProfile.email}</p>
                <p>Name: {userProfile.name}</p>
                <p>Phone: {userProfile.phone}</p>
            </div>}
        </div>

    )
}

export default Profile