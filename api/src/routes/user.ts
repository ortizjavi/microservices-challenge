import express from "express";
import {check, header} from "express-validator";

import {listUsers} from "../controllers/user";
import authToken from "../middlewares/auth";
import handleError from "../middlewares/handleGRPCerror";
import {validate} from "../middlewares/validator";

const router = express.Router();

router.get(
  "/",
  validate([
    header("authorization", "Debes pasar un token de autenticación").notEmpty().contains("Bearer"),
    check("offset", "El offset debe ser númerico").optional({checkFalsy: true}).isNumeric(),
    check("limit", "El limit debe ser númerico").optional({checkFalsy: true}).isNumeric()
  ]),
  authToken,
  listUsers,
  handleError
);

export default router;
