import ticketSchema from "./ticket.Schema.js";

// Insert ticket
export const insertTicket=(obj)=>{
    return ticketSchema(obj).save()
}

// Get all tickets
export const getAllTickets=()=>{
    return ticketSchema.find()
}

// Get tickets by filter
export const getTicketByFilter=(filter)=>{
    return ticketSchema.findOne(filter)
}

// update tickets
export const updateTicket=(obj,filter)=>{
    return ticketSchema.findByIdAndUpdate(obj,filter,{new:true})
}

// delete ticket
export const deleteTicket=(filter)=>{
    return ticketSchema.findByIdAndDelete(filter)
}
