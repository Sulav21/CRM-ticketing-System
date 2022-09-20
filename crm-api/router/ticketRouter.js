import express from "express";
import { insertTicket } from "../models/tickets/ticket.model.js";

const router = express.Router();

router.all("/", (req, res, next) => {
  next();
});

router.post("/", async (req, res, next) => {
  try {
    const { subject, sender, message } = req.body;
    const ticketObj = {
      clientId: "631fe3f08999fe77df413e2e",
      subject,
      conversations: [{ sender, message }],
    };
    const result = await insertTicket(ticketObj);
    if (result?._id) {
      return res.json({
        status: "success",
        message: "Ticket has been successfully created",
      });
    }

    res.status(500).json({
      status: "error",
      message: "Unable to create ticket, please try again later",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
