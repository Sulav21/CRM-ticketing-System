import { getUser } from '../../helpers/AxiosHelpers'
import { getUserPending, getUserSuccess, getUserFail } from './userSlice'


export const getUserProfile=()=>async dispatch=>{
    try {
        const result = await getUser()
        
       console.log(result)
        result.status='success' && dispatch(getUserSuccess(result.message))
        
    } catch (error) {
        dispatch(getUserFail(error.message))
    }
}