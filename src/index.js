import express from "express";
import cors from "cors";
import {
  createParticipant,
  Login,
} from "./controllers/participant.controller.js";

const app = express();

app.use([cors(), express.json()]);

//===============ROTAS DE PARTICIPANTES====================

// SIGN IN ENTRAR
//Se o login for feito com sucesso, você tem um token
app.post("/", Login);

//SIGN UP INSCREVER-SE, login e senha
//localhost:5000/sign-up
app.post("/sign-up", createParticipant);





app.listen(5000, () => console.log("Listening on port 5000..."));
