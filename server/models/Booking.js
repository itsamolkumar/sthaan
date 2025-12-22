import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  house: { type: mongoose.Schema.Types.ObjectId, ref: "House" },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  guestsCount: { type: Number, required: true, min: 1 },
  
  // Total amount ka detailed breakdown
  total: {
    pricePerNight: { type: Number, required: true },
    nights: { type: Number, required: true },
    cleaningFee: { type: Number, default: 0 },
    serviceFee: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },
  },
  
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "refunded"],
    default: "pending",
  },
  
  // Booking status ka updated enum
  bookingStatus: {
    type: String,
    enum: ["pending", "confirmed", "checked_in", "completed", "cancelled"],
    default: "pending",
  },
  
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;