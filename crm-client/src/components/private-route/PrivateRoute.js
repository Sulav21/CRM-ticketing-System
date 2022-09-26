import React,{useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getNewAccessToken } from "../../helpers/AxiosHelpers";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { loginSuccess } from "../../pages/login/LoginSlice";


export const PrivateRoute = ({ children, ...rest }) => {
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state=>state.login)

    useEffect(() => {
        const getAccessToken = async()=>{
          const result =  await getNewAccessToken()
          result && dispatch(loginSuccess())
        }
        getAccessToken()
     sessionStorage.getItem('accessJWT') && dispatch(loginSuccess())
    }, [dispatch])
    
    const location = useLocation()

    
    return isAuth ?  <DefaultLayout>{children}</DefaultLayout>  : <Navigate to='/' replace state={{from:location}}/>
};
