import { Router } from "express";
import Teste_DirecaoController from "../controllers/controller.testes_direcao.js";

const routeTeste_Direcao = Router(); 

routeTeste_Direcao.get("/testes_direcao" , Teste_DirecaoController.getAllTeste_Direcao);

export default routeTeste_Direcao