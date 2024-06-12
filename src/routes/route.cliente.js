import { Router } from "express";
import ClienteController from "../controllers/controller.cliente.js";

const routeCliente = Router(); 

routeCliente.get("/cliente" , ClienteController.getAllCliente);

export default routeCliente