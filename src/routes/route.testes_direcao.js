import { Router } from "express";
import Teste_DirecaoController from "../controllers/controller.testes_direcao.js";

const routeTeste_Direcao = Router(); 

routeTeste_Direcao.get("/testes_direcao" , Teste_DirecaoController.getAllTeste_Direcao);
routeTeste_Direcao.post("/testes_direcao", Teste_DirecaoController.createTeste_Direcao);
routeTeste_Direcao.put("/testes_direcao/:id", Teste_DirecaoController.editTeste_Direcao);
routeTeste_Direcao.delete("/testes_direcao/:id", Teste_DirecaoController.removeTeste_Direcao);

export default routeTeste_Direcao