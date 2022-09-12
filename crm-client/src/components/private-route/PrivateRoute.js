import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";

const isAuth = true;
export const PrivateRoute = ({ children, ...rest }) => {
    const location = useLocation()

    
    return isAuth ?  <DefaultLayout>{children}</DefaultLayout>  : <Navigate to='/' replace state={{from:location}}/>
};
