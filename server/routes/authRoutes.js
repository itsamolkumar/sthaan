import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { register, login,logout, generateOtp, verifyEmail, isAuthenticated, sendResetOtp,resetPassword  } from "../controller/authController.js"
import validate from "../middlewares/joiMiddlewareValidation.js";
import { userValidationSchema } from "../joiValidation/userSchemaValidation.js";
const authRouter=express.Router();
authRouter.post("/register",validate(userValidationSchema),register);
authRouter.post("/login",login);
authRouter.post("/logout",logout);
authRouter.post("/generate-otp",authMiddleware,generateOtp);
authRouter.post("/verify-account",authMiddleware,verifyEmail);
authRouter.post("/is-auth",authMiddleware,isAuthenticated);
authRouter.post("/send-reset-otp",sendResetOtp);
authRouter.post("/reset-password",resetPassword);
export default authRouter;
