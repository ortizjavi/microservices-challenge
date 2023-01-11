import express from "express";
import {check} from "express-validator";

import {listUsers} from "../controllers/user";
import authToken from "../middlewares/auth";
import handleError from "../middlewares/handleGRPCerror";
import {validate} from "../middlewares/validator";

const router = express.Router();

router.get(
  "/",
  authToken,
  validate([
    check("offset", "El offset debe ser númerico").optional({checkFalsy: true}).isNumeric(),
    check("limit", "El limit debe ser númerico").optional({checkFalsy: true}).isNumeric()
  ]),
  listUsers,
  handleError
);

export default router;
