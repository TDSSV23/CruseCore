import { Router } from "express";
import VeiculoController from "../controllers/controller.veiculos.js";

const routeVeiculo = Router(); 

routeVeiculo.get("/veiculos" , VeiculoController.getAllVeiculo);
routeVeiculo.post("/veiculos", VeiculoController.createVeiculo);
routeVeiculo.put("/veiculos/:id", VeiculoController.editVeiculo);
routeVeiculo.delete("/veiculos/:id", VeiculoController.removeVeiculo);

export default routeVeiculo