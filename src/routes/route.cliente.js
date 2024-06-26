import { Router } from "express";
import ClienteController from "../controllers/controller.cliente.js";

const routeCliente = Router(); 

routeCliente.get("/cliente" , ClienteController.getAllCliente);
routeCliente.post("/cliente" , ClienteController.createCliente);
routeCliente.put("/cliente/:id", ClienteController.editCliente);
routeCliente.delete("/cliente/:id", ClienteController.removeCliente)

// Rota de Login

export default routeCliente