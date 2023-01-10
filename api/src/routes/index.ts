import express from "express";

import authRoute from "./auth";

const router = express.Router();

// import usersRoute from "./user";

// router.use("/users", usersRoute);
router.use("/auth", authRoute);

export default router;
