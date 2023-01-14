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
    param("idOrEmail", "El correo no tiene el formato correcto").isEmail(),
    param("idOrEmail", "El id no tiene el formato correcto")
      .isHexadecimal()
      .isLength({min: 24, max: 24})
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
    check("offset", "El offset debe ser númerico").optional({checkFalsy: true}).isInt({min: 0}),
    check("limit", "El limit debe ser númerico").optional({checkFalsy: true}).isInt({min: 0})
  ]),
  authToken,
  listUsers,
  handleError
);

export default router;
