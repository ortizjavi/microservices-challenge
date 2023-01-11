import express from "express";
import {check, header, oneOf, param} from "express-validator";

import {listUsers, getUser} from "../controllers/user";
import authToken from "../middlewares/auth";
import handleError from "../middlewares/handleGRPCerror";
import {handleOneOfMiddleWare, validate} from "../middlewares/validator";

const router = express.Router();

router.get(
  "/:idOrEmail",
  validate([
    header("authorization", "Debes pasar un token de autenticación").notEmpty().contains("Bearer")
  ]),
  oneOf([
    param("idOrEmail", "El correo está mal formado").isEmail(),
    param("idOrEmail", "El id está vacio").not().isEmpty().isHexadecimal()
  ]),
  handleOneOfMiddleWare,
  authToken,
  getUser,
  handleError
);

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
