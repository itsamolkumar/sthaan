import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";
import asyncWrap from "../utils/asyncWrap.js";
// import validate from "../middlewares/joiMiddlewareValidation.js";
// import { userValidationSchema } from "../joiValidation/userSchemaValidation.js";
import { becomeHost } from "../controller/userController.js";
const userRouter=express.Router();
userRouter.post(
  "/become-host",
  upload.fields([
    { name: "aadhar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "profileImage", maxCount: 1 },
  ]),
  authMiddleware,
  // validate(userValidationSchema),
  asyncWrap(becomeHost)
);
export default userRouter;
