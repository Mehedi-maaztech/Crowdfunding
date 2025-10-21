import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../component/Loading';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
    }
    if(user && user.email){
        return children;
    }
    return (
        <Navigate to='/auth/signin'></Navigate>
    );
};

export default PrivateRoutes;