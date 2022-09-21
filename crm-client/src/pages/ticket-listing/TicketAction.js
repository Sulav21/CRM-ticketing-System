import { fetchTickets } from "../../helpers/AxiosHelpers"
import { fetchTicketError, fetchTicketLoading, fetchTicketSuccess } from "./TicketsSlice"

export const fetchAllTickets=()=>async dispatch=>{
    
    dispatch(fetchTicketLoading())
    try {
        const response = await fetchTickets()
       
        response.status='success' && dispatch(fetchTicketSuccess(response.result))
       
        
    } catch (error) {
        console.log(error)
        dispatch(fetchTicketError(error.message))
    }
}