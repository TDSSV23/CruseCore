import { Router } from "express";
import VeiculoController from "../controllers/controller.veiculos.js";

const routeVeiculo = Router(); 

routeVeiculo.get("/Veiculo" , VeiculoController.getAllVeiculo);

export default routeVeiculo