import mongoose from "mongoose";

const USER_1_ID = new mongoose.Types.ObjectId("694d15ba6df4469c82c3af2f");
const USER_2_ID = new mongoose.Types.ObjectId("694d15bb6df4469c82c3af30");
const USER_3_ID = new mongoose.Types.ObjectId("694d15bb6df4469c82c3af31");

const HOUSE_1_ID = new mongoose.Types.ObjectId("694d172a5958a67a3a15ac82");
const HOUSE_2_ID = new mongoose.Types.ObjectId("694d172a5958a67a3a15ac84");
const HOUSE_3_ID = new mongoose.Types.ObjectId("694d172a5958a67a3a15ac86");

const fakeBookings = [
  // ================= BOOKING 1 =================
  {
    user: USER_1_ID,
    house: HOUSE_1_ID,
    checkInDate: new Date("2025-08-12"),
    checkOutDate: new Date("2025-08-15"),
    guestsCount: 2,
    total: {
      pricePerNight: 4500,
      nights: 3,
      cleaningFee: 500,
      serviceFee: 300,
      totalAmount: 14300 // (4500 * 3) + 500 + 300
    },
    paymentStatus: "paid",
    bookingStatus: "confirmed"
  },

  // ================= BOOKING 2 =================
  {
    user: USER_2_ID,
    house: HOUSE_2_ID,
    checkInDate: new Date("2025-09-02"),
    checkOutDate: new Date("2025-09-06"),
    guestsCount: 3,
    total: {
      pricePerNight: 2800,
      nights: 4,
      cleaningFee: 400,
      serviceFee: 250,
      totalAmount: 11850 // (2800 * 4) + 400 + 250
    },
    paymentStatus: "paid",
    bookingStatus: "checked_in"
  },

  // ================= BOOKING 3 =================
  {
    user: USER_3_ID,
    house: HOUSE_3_ID,
    checkInDate: new Date("2025-10-06"),
    checkOutDate: new Date("2025-10-10"),
    guestsCount: 4,
    total: {
      pricePerNight: 3200,
      nights: 4,
      cleaningFee: 600,
      serviceFee: 350,
      totalAmount: 13750 // (3200 * 4) + 600 + 350
    },
    paymentStatus: "pending",
    bookingStatus: "pending"
  },

  // ================= BOOKING 4 =================
  {
    user: USER_1_ID,
    house: HOUSE_2_ID,
    checkInDate: new Date("2025-07-21"),
    checkOutDate: new Date("2025-07-24"),
    guestsCount: 1,
    total: {
      pricePerNight: 1500,
      nights: 3,
      cleaningFee: 200,
      serviceFee: 150,
      totalAmount: 4850 // (1500 * 3) + 200 + 150
    },
    paymentStatus: "refunded",
    bookingStatus: "cancelled"
  },

  // ================= BOOKING 5 =================
  {
    user: USER_2_ID,
    house: HOUSE_1_ID,
    checkInDate: new Date("2025-11-02"),
    checkOutDate: new Date("2025-11-05"),
    guestsCount: 2,
    total: {
      pricePerNight: 6000,
      nights: 3,
      cleaningFee: 700,
      serviceFee: 500,
      totalAmount: 19200 // (6000 * 3) + 700 + 500
    },
    paymentStatus: "paid",
    bookingStatus: "completed"
  }
];

export default fakeBookings;
