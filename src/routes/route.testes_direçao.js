import { Router } from "express";
import Teste_ControllerController from "../controllers/controller.Teste_Controller.js";

const routeTeste_Controller = Router(); 

routeTeste_Controller.get("/Teste_Controller" , Teste_ControllerController.getAllTeste_Controller);

export default routeTeste_Controller