import express from "express"
import authMiddleware from "../middlewares/authMiddleware.js";
import { getSingleHouse,getListings, } from "../controller/postController.js";
import asyncWrap from "../utils/asyncWrap.js";
const postRouter=express.Router();
postRouter.get("/listings/:id",asyncWrap(getSingleHouse));
postRouter.get("/listings/",asyncWrap(getListings));


export default postRouter;