import express from "express";
import {check} from "express-validator";

import {login, signUp} from "../controllers/auth";
import handleError from "../middlewares/handleGRPCerror";
import {validate} from "../middlewares/validator";

const router = express.Router();

router.post(
  "/login",
  validate([
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty()
  ]),
  login,
  handleError
);

router.post(
  "/signup",
  validate([
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty()
  ]),
  signUp,
  handleError
);

export default router;
